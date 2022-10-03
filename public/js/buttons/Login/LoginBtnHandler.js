let loginText = document.getElementById('login-text');
let loginIcon = document.getElementById('login-icon');

let logoutText = document.getElementById('logout-text');
let logoutIcon = document.getElementById('logout-icon');

let isLoggedIn = localStorage.getItem("LoginStatus");

if (isLoggedIn == "true") {
    loginIcon.style.display = "none";
    loginText.style.display = "none"

    logoutText.style.display = "block";
    logoutIcon.style.display = "block"
} else {
    loginText.style.display = "block";
    loginIcon.style.display = "block";

    logoutText.style.display = "none";
    logoutIcon.style.display = "none"
}

