import { TokenRefresh } from "../../TokenRefresh/tokenRefresh.js";

document.getElementById("logout-text").addEventListener("click",
    async function postLogout() {
        const access_token = 'Bearer ' + localStorage.getItem("access_token");
        const url = '/auth/logout';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': access_token,
                    'Content-Type': 'application/json'
                },
            });
            console.log("LOGIN 1: ", response);
            
            //access token time expires
            if (response.statusText === "Unauthorized") {
                if (!await TokenRefresh()) {
                    throw new Error("Refresh Token expires")
                }
                console.log("TokenRefresh after");
                await postLogout();
            }
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.setItem("LoginStatus", "false");
            location.href = "/";
        }
        catch (error) {
            console.error(error);
        }
    }
);
