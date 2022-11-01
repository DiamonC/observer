import { backend } from "$lib/stores/backend";
const apiurl = "https://db.arthmc.xyz/";
const pburl = "https://api.arthmc.xyz/";

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

export function getServerInfo(serverName: string) {

	const req2 = {
		method: "GET",
		headers: {
			techname: serverName,
		},
	};
	console.log("Request Sent: " + req2.headers);

	const response = fetch(apiurl + "server", req2)
		.then((res) => res.text())
		.then((text) => console.log("Response Recieved: " + text))
		.catch((err) => console.error(err));

	return "done";
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
			//log the next 15 characters after the word "token"
			const token = input.substring(input.indexOf("token") + 8, input.indexOf("token") + 163);
			console.log(token)


			if (input.indexOf("400") > -1) {
				return "error";
			} else {
				return "success";
			}
		})
		.catch((err) => console.error(err));
}

export function changeServerState(reqstate: string) {
	let req3;
	if (reqstate == "start") {
		req3 = {
			method: "GET",
			headers: {
				request: "start",
			},
		};
	} else if (reqstate == "stop") {
		req3 = {
			method: "GET",
			headers: {
				request: "stop",
			},
		};
	} else if (reqstate == "restart") {
		req3 = {
			method: "GET",
			headers: {
				request: "restart",
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

export function createServer(n: string, s: string, v: string) {

	const req4 = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: n,
			software: s,
			version: v,
		}),
	};
	console.log("Request Sent: " + req4.body);

	const response = fetch(apiurl + "server/new", req4)
		.then((res) => res.text())
		.then((text) => console.log("Response Recieved: " + text))
		.catch((err) => console.error(err));

	return "done";
}

