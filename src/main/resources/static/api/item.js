import { BASE_URL } from "/api/utils/const.js";
import { AUTH } from "/api/auth.js";

export let ITEM = {};

ITEM.getItems = async () => {
    return fetch(`${BASE_URL}/item/getitems`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

ITEM.getItem = async (itemId) => {
    return fetch(`${BASE_URL}/item/getitem/${itemId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

ITEM.addItem = async (itemObj) => {
    return fetch(`${BASE_URL}/item/additem`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify(itemObj)
    });
}

ITEM.addItems = async (itemObjList) => {
    return fetch(`${BASE_URL}/item/additems`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify(itemObjList)
    });
}


// Mount the API
export let CMS_API = window.CMS_API || {};
CMS_API.ITEM = ITEM;
window.CMS_API = CMS_API;