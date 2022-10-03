import { setErrorFor, setSuccessFor } from '../ValidatorForm/ValidatorForm.js';

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    postLogin();
});

async function postLogin() {
    const url = '/auth/signin';

    const data = {
        email: email.value,
        password: password.value,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(response);
        const json = await response.json();
 

        if (response.statusText === "Forbidden") {
            console.log("asda")
            setErrorFor(email, json.message);
            setErrorFor(password, "");
            throw new Error(json.message);
        }
        if (response.statusText === "Bad Request") {
            let emailFlag = true;
            for (let i = 0; i < json.message.length; i++) {
                if (json.message[i].includes("email") && emailFlag) {
                    setErrorFor(email, json.message[i]);
                    emailFlag = false;
                }
                else if (json.message[i].includes("password"))
                    setErrorFor(password, json.message[i]);
            }
            throw new Error(json.message);
        } else {
            setSuccessFor(email);
            setSuccessFor(password);
        }
        localStorage.setItem("LoginStatus", "true");
        localStorage.setItem("access_token", json.access_token);
        localStorage.setItem("refresh_token", json.refresh_token);

        // location.href = "/";

    }
    catch (error) {
        console.error(error);
    }
}


