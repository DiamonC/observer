import fetch from "node-fetch";
const apiurl = "https://1e17-104-10-50-118.ngrok.io/api/"

export function createUser(em, pwd) {
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
	console.log("Request Sent: " + req.body)

  const response = fetch((apiurl + "users"), req)
    .then((res) => res.text())
    .then((text) => console.log("Request Recieved: " + text))
    .catch((err) => console.error(err));

	return("done")
}

//console.log("response: " + createUser("diamoncyt@gmail.com", "12345678abcdefgh"));