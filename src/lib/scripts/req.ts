import accountEmail from "$lib/stores/accountEmail";
import { browser } from "$app/environment";
import { goto } from "$app/navigation";
export const apiurl = "https://api.arthmc.xyz/";
export const pburl = "https://pb.arthmc.xyz/api/";

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
        alert("Server name already exists");

        //set localstorage x to true
        window.localStorage.setItem("x", "true");
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
