const refresher = {
    tokenRefresh: async function () {
        const refreshUrl = "/auth/refresh";
        const refresh_token = localStorage.getItem("refresh_token");
        try {
            const refreshResponse = await fetch(refreshUrl, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + refresh_token,
                    'Content-Type': 'application/json',
                }
            });
            const refreshJson = await refreshResponse.json();

            console.log("REFRESH RESPONSE: ", refreshResponse);

            // refresh token time expires
            if (refreshResponse.statusText === "Unauthorized") {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                localStorage.setItem("LoginStatus", false);
                location.href = "/";
                return false;
            }
            localStorage.setItem("access_token", refreshJson.access_token);
            localStorage.setItem("refresh_token", refreshJson.refresh_token);
            return true;
        } catch (e) {
            // console.log(e)
        }

    },
}


export const TokenRefresh = refresher.tokenRefresh;

// f (string url) {
//     fetch(url) /registerStolik
//     data = response.json
//     if (data.message) === "un"
//         fetch(/refresh/) 
//         data = response.json

//         if (data.message) === "un"
//             localStorage.delete
//             localStorage.LOgin = false
//             /logout
//             return false
//         if data.refresh != null 
//             reset localStorage (access, refresh)
//             return true
// }


// handleButton = () => { 
//     if (f()) {

//     }
// }



