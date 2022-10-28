const apiurl = "https://api.arthmc.xyz/server";
const pburl = "http://127.0.0.1:8090/api/";

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

        return "success";
      }
    })
    .catch((err) => console.error(err));
}


export function getServerInfo(em: string, pwd: string) {
  const serverName = "tech";
  const req2 = {
    method: "GET",
    headers: {
      techname: serverName,
    },
  };
  console.log("Request Sent: " + req2.headers);

  const response = fetch(apiurl + "", req2)
    .then((res) => res.text())
    .then((text) => console.log("Response Recieved: " + text))
    .catch((err) => console.error(err));

  return "done";
}
