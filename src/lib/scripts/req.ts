import accountEmail from "$lib/stores/accountEmail";
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
export const apiurl = "http://localhost:4000/";
export const pburl = "https://pb.arthmc.xyz/api/";
//set email from local storage to variable
if (browser) {
  accountEmail.set(window.localStorage.getItem("accountEmail"));
}
export function getSettings() {
  const req = {
    method: "GET",
  };
  console.log("Request Sent");
  return fetch(apiurl + "settings", req)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("Response Recieved: " + input);

      return JSON.parse(input);
    })
    .catch((err) => console.error(err));
}
export function getServers(em: string) {
  console.log("hi" + em);
  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: em,
    }),
  };
  console.log("Request Sent: " + req.body);
  return fetch(apiurl + "servers", req)
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
export function createUser(em: string, pwd: string) {
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

export function loginEmail(em: string, pwd: string) {
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

export function changeServerState(reqstate: string, id: number, em: string) {
  let req3;
  if (reqstate == "start") {
    req3 = {
      method: "GET",
      headers: {
        state: "start",
        id: id,
        email: em,
      },
    };
  } else if (reqstate == "stop") {
    req3 = {
      method: "GET",
      headers: {
        state: "stop",
        id: id,
      },
    };
  } else if (reqstate == "restart") {
    req3 = {
      method: "GET",
      headers: {
        state: "restart",
        id: id,
      },
    };
  } else {
    req3 = {
      method: "GET",
      headers: {
        request: "x",
      },
    };
  }
  console.log("Request Sent: " + req3.headers);

  const response = fetch(apiurl + "server/change-state", req3)
    .then((res) => res.text())
    .then((text) => console.log("Response Recieved: " + text))
    .catch((err) => console.error(err));

  return "done";
}

export function createServer(n: string, s: string, v: string, a, c) {
  const req4 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: n,
      software: s,
      version: v,
      addons: a,
      cmd: c,
      email: window.localStorage.getItem("accountEmail"),
    }),
  };
  console.log("Request Sent: " + req4.body);

  //if response is 409, send an alert, otherwise do nothing
  const response = fetch(apiurl + "server/new", req4)
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
  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  };

  return fetch(apiurl + "server/", req)
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
  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  };

  return fetch(apiurl + "server/delete", req)
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
  const req = {
    method: "POST",
    headers: {
      id: id,
      cmd: cmd,
    },
  };
  console.log("Request Sent: " + JSON.stringify(req));
  return fetch(apiurl + "terminal", req)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("" + req);
      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        //return input as json
        return JSON.parse(input);
      }
    });
}

export function readTerminal(id: number) {
  const req = {
    method: "GET",
    headers: {
      id: id,
    },
  };
  console.log("Request Sent: " + JSON.stringify(req));
  return fetch(apiurl + "terminal", req)
    .then((res) => res.text())
    .then((input: string) => {
      console.log("" + JSON.stringify(input));
      if (input.indexOf("400") > -1) {
        return "error";
      } else {
        //return input as json
        return input;
      }
    });
}
