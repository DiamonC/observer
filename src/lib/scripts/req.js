
const apiurl = "https://api.arthmc.xyz/server"
const pburl = "http://127.0.0.1:8090/api/"

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

  const response = fetch((pburl + "users"), req)
    .then((res) => res.text())
    .then((text) => console.log("Request Recieved: " + text))
    .catch((err) => console.error(err));

	return("done")
}

//console.log("response: " + createUser("diamoncyt@gmail.com", "12345678abcdefgh"));

export function getServerInfo(em, pwd) {
	const serverName = "tech"
	const req2 = {
    method: "GET",
    headers: {
      techname: serverName,
    },
  };
	console.log("Request Sent: " + req2.headers)

  const response = fetch((apiurl + ""), req2)
    .then((res) => res.text())
    .then((text) => console.log("Request Recieved: " + text))
    .catch((err) => console.error(err));

	return("done")
}
