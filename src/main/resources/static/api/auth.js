import { BASE_URL, TOKEN_TIMEOUT } from "/api/utils/const.js";
import { setCookie, getCookie, eraseCookie } from "/api/utils/cookie-manager.js"

export let AUTH = {};

AUTH.login = async (username, password) => {
    const res = await fetch(`${BASE_URL}/auth/generate-token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    const resClone = res.clone();
    const resJSON = await res.json();
    if (res.status == 200) {
        setCookie("token", resJSON.token, TOKEN_TIMEOUT);
    }
    return Promise.resolve(resClone);    
}

AUTH.getCurrentUser = async () => {
    return fetch(`${BASE_URL}/auth/current-user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

AUTH.getCurrentUserToken = async () => {
    return new Promise((resolve, reject) => {
        if (getCookie("token"))
            resolve(getCookie("token"));
        else 
            reject("User not logged in");    
    });
}

AUTH.logout = async () => {
    eraseCookie("token");
    window.location = "/";
}

// Mount the API
export let CMS_API = window.CMS_API || {};
CMS_API.AUTH = AUTH;
window.CMS_API = CMS_API;