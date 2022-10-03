import { setErrorFor, setSuccessFor } from '../ValidatorForm/ValidatorForm.js';

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
	e.preventDefault();
	postRegistration();
});


async function postRegistration() {
	const url = '/auth/signup';
	const data = {
		password: document.getElementById("password").value,
		email: document.getElementById("email").value,
	};

	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const json = await response.json();
		console.log(json);


		if (json.message === "User already exists") {
			setErrorFor(email, json.message);
			setErrorFor(password, "");
			setErrorFor(password2, "");
			throw new Error(json.message);
		}

		if (response.statusText === "Bad Request") {
			setSuccessFor(email);
			setSuccessFor(password);
			let emailFlag = true, passwordFlag = true;
			for (let i = 0; i < json.message.length; i++) {
				if (json.message[i].includes("email") && emailFlag) {
					setErrorFor(email, json.message[i]);
					emailFlag = false;
				}
				else if (json.message[i].includes("password") && passwordFlag) {
					setErrorFor(password, json.message[i]);
					passwordFlag = false;
				}
			}
			throw new Error(json.message);
		} else {
			setSuccessFor(email);
			setSuccessFor(password)
		}

		localStorage.setItem("LoginStatus", "true");
        localStorage.setItem("access_token", json.access_token);
        localStorage.setItem("refresh_token", json.refresh_token);

		location.href = "/"
	}
	catch (error) {
		console.error(error);
	}
}
