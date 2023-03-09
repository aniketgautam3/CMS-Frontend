import { BASE_URL } from "/api/utils/const.js";
import { AUTH } from "/api/auth.js";

export let MENU = {};

MENU.getAllMenu = async () => {
    return fetch(`${BASE_URL}/menu/getmonthmenu`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

MENU.getMenuById = async (menuId) => {
    return fetch(`${BASE_URL}/menu/getmenu/${menuId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

MENU.getMenuListByDate = async (menuDate) => {
    return fetch(`${BASE_URL}/menu/getbydate/${menuDate}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

MENU.addMenu = async (menuDate, menuType) => {
    if (typeof menuType === "string")
        menuType = menuType == "Lunch" ? 1 : 0;
    return fetch(`${BASE_URL}/menu/addmenu`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify({
            "date": menuDate,
            "menuType" : menuType
        })
    });
}

MENU.removeMenu = async (menuId) => {
    if (typeof menuType === "string")
        menuType = menuType == "Lunch" ? 1 : 0;
    return fetch(`${BASE_URL}/menu/removemenu/${menuId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

MENU.addItemToMenu = async (menuId, itemId) => {
    return fetch(`${BASE_URL}/menu/addtomenu`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify({menuId, itemId})
    });
}

MENU.addItemListToMenu = async (menuId, ...itemIds) => {
    return fetch(`${BASE_URL}/menu/additemstomenu/${menuId}/${itemIds.join(",")}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

MENU.removeItemFromMenu = async (menuId, itemId) => {
    return fetch(`${BASE_URL}/menu/removefrommenu/${menuId}/${itemId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

MENU.removeItemFromMenu = async (menuId, itemId) => {
    return fetch(`${BASE_URL}/menu/removefrommenu/${menuId}/${itemId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

MENU.changeMenuApprovalStatus = async (menuId, statusCode) => {
    return fetch(`${BASE_URL}/menu/approvemenu/${menuId}/${statusCode}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}


// Mount the API
export let CMS_API = window.CMS_API || {};
CMS_API.MENU = MENU;
window.CMS_API = CMS_API;