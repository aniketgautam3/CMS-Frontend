import { BASE_URL } from "/api/utils/const.js";
import { AUTH } from "/api/auth.js";

export let USER = {};

USER.getUsers = async () => {
    return fetch(`${BASE_URL}/user/getusers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

USER.addUser = async (userObj) => {
    return fetch(`${BASE_URL}/user/adduser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify(userObj)
    });
}

USER.removeUser = async (userEmail) => {
    return fetch(`${BASE_URL}/user/removeuser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify({
            "email" : userEmail
        })
    });
}

USER.getCurrentUserOrders = async () => {
    const userId = (await (await CMS_API.AUTH.getCurrentUser()).json()).id;
    return fetch(`${BASE_URL}/user/getorders/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

USER.getUserOrdersByUserId = async (userId) => {
    return fetch(`${BASE_URL}/user/getorders/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

// Mount the API
export let CMS_API = window.CMS_API || {};
CMS_API.USER = USER;
window.CMS_API = CMS_API;