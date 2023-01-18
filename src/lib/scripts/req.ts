
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
export const apiurl = "https://api.arthmc.xyz/";
export const pburl = "https://pb.arthmc.xyz/api/";
export const lrurl = "https://api.modrinth.com/v2/";
let em = "noemail"



//set email from local storage to variable
if (browser) {
  if(window.localStorage.getItem("enableAuth") == "false") {
    em = "guest"
    window.localStorage.setItem("accountEmail", "guest")
  } else {
  em = (window.localStorage.getItem("accountEmail"));
  }
}

const GET = { method: "GET" };
const POST = { method: "POST" };
const DELETE = { method: "DELETE" };

export function sendVersion(link: string, id: string) {
  const url =
    apiurl +
    "server/" +
    id +
    "/addplugin" +
    "?pluginUrl=" +
    encodeURIComponent(link);
  console.log(url);
  return fetch(url, POST)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("Response Recieved: " + input);

      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        return "success";
      }
    })
    .catch((err) => console.error(err));
}
export function getVersions(id: string) {
  const url = lrurl + "project/" + id + "/version";
  return fetch(url, GET)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("Response Recieved: " + input);

      return JSON.parse(input);
    })
    .catch((err) => console.error(err));
}
export function searchPlugins(
  software: string,
  version: string,
  query: string
) {
  if (version == "Latest") {
    version = "1.19.3";
  }

  const url =
    lrurl +
    "search" +
    "?query=" +
    query +
    '&facets=[["categories:' +
    software +
    '"],["versions:' +
    version +
    '"]]' +
    "&limit=10";

  return fetch(url, GET)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("Response Recieved: " + input);

      return JSON.parse(input);
    })
    .catch((err) => console.error(err));
}

export function getSettings() {
  console.log("Request Sent");
  return fetch(apiurl + "settings", GET)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("Response Recieved: " + input);
      if (browser) {
        window.localStorage.setItem("enablePay", JSON.parse(input).enablePay);
        window.localStorage.setItem("enableAuth", JSON.parse(input).enableAuth);
      }

      return JSON.parse(input);
    })
    .catch((err) => console.error(err));
}

export function getServers() {
  const url = apiurl + "servers/" + "?email=" + em;
  console.log("Request Sent: Get Servers");
  return fetch(url, GET)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("Response Recieved: " + input);
      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        //return input as json
        return JSON.parse(input);
      }
    })
    .catch((err) => console.error(err));
}
export function createUser( pwd: string) {
  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: em,
      password: pwd,
      passwordConfirm: pwd,
    }),
  };
  console.log("Request Sent: " + req.body);

  return fetch(pburl + "users", req)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("Response Recieved: " + input);
      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        loginEmail(em, pwd);
        return "success";
      }
    })
    .catch((err) => console.error(err));
}

export function loginEmail( pwd: string) {
  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: em,
      password: pwd,
    }),
  };
  console.log("Request Sent: " + req.body);

  return fetch(pburl + "users/auth-via-email", req)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("Response Recieved: " + input);

      //grabs token from response
      const token = input.substring(
        input.indexOf("token") + 8,
        input.indexOf("token") + 163
      );

      //set the token in local storage
      if (browser) {
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("accountEmail", em);
      }

      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        if (browser) {
          window.localStorage.setItem("loggedIn", "true");
        }
        return "success";
      }
    })
    .catch((err) => console.error(err));
}

export function changeServerState(reqstate: string, id: number) {
  const url = apiurl + "server/" + id + "/state/" + reqstate + "?email=" + em;
  const response = fetch(url, POST)
    .then((res) => res.text())
    .then((text) => console.log("Response Recieved: " + text))
    .catch((err) => console.error(err));

  return "done";
}

export function createServer(
  n: string,
  s: string,
  v: string,
  a: any[],
  c: any[]
) {
  const url =
    apiurl +
    "server/new?" +
    "email=" +
    window.localStorage.getItem("accountEmail");

  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: n,
      software: s,
      version: v,
      addons: a,
      cmds: c,
    }),
  };

  console.log("Request Sent: " + url);
  //if response is 409, send an alert, otherwise do nothing
  const response = fetch(url, req)
    .then((res) => res.text())
    .then((text) => {
      console.log("Response Recieved: " + text);
      if (text.indexOf("exists") > -1) {
        alert("Sorry, that name is taken.");

        //set localstorage x to true
        window.localStorage.setItem("x", "true");
      } else if (text.indexOf("Funds") > -1) {
        alert("You don't have enough money to make a new server.");
        window.localStorage.setItem("x", "true");
      } else if (text.indexOf("Subscribe") > -1) {
        alert("You need to subscribe first.");
        window.localStorage.setItem("x", "true");
      } else if (text.indexOf("Success") == -1) {
        alert("Sorry, something went wrong.");
        window.localStorage.setItem("x", "true");
      } else {
        //set text.subscription to localstorage
        if (browser) {
          window.localStorage.setItem("subs", JSON.parse(text).subscriptions);
          //if localstorage servers is null, set it to 0
          if (window.localStorage.getItem("servers") == null) {
            window.localStorage.setItem("servers", "0");
          }
          //increase localstorage servers by 1
          window.localStorage.setItem(
            "servers",
            (parseInt(window.localStorage.getItem("servers")) + 1).toString()
          );
        }
      }
    })
    .catch((err) => console.error(err));

  return "done";
}

export function getPlayers(address: string) {
  const req = {
    method: "GET",
  };
  console.log("Request Sent");
  return fetch("https://api.mcsrvstat.us/2/" + address, req)
    .then((res) => res.text())

    .then((text: string) => {
      console.log("Response Recieved: " + text);
      //return whats after ""online":" and before ","max"

      console.log(
        text.substring(text.indexOf("online") + 8, text.indexOf("max") - 2)
      );
      return parseInt(
        text.substring(text.indexOf("online") + 8, text.indexOf("max") - 2)
      );

      // return input as a number
    });
}

export function getServer(id: number) {
  const url = apiurl + "server/" + id;
  return fetch(url, GET)
    .then((res) => res.text())
    .then((input: string) => {
      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        //return input as json
        return JSON.parse(input);
      }
    });
}

export function deleteServer(id: number) {
  const url = apiurl + "server/" + id;

  return fetch(url, DELETE)
    .then((res) => res.text())
    .then((input: string) => {
      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        //return input as json
        return JSON.parse(input);
      }
    });
}

export function writeTerminal(id: number, cmd: string) {
  const url = apiurl + "terminal/" + id + "?cmd=" + cmd;
  return fetch(url, POST)
    .then((res) => res.text())
    .then((input: string) => {
      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        //return input as json
        return JSON.parse(input);
      }
    });
}

export function readTerminal(id: number) {
  const url = apiurl + "terminal/" + id;
  return fetch(url, GET)
    .then((res) => res.text())
    .then((input: string) => {
      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        //return input as json
        return input;
      }
    });
}

//check if stripe is enabled
getSettings();
