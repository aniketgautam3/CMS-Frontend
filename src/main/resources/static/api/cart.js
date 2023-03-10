import { BASE_URL } from "/api/utils/const.js";
import { AUTH } from "/api/auth.js";

export let CART = {};

CART.getCartById = async (cartId) => {
    return fetch(`${BASE_URL}/cart/getcart/${cartId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

// TODO: getCurrentUserCart

CART.addItemsToCartByUserId = async (userId, itemsList) => {
    return fetch(`${BASE_URL}/cart/addtocart/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify([...itemsList])
    });
}

CART.addItemToCartByUserId = async (userId, itemObj) => {
    return fetch(`${BASE_URL}/cart/addtocart/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify([itemObj])
    });
}

CART.addItemToCurrentUserCart = async (itemObj) => {
    let userId = (await (await AUTH.getCurrentUser()).json()).id;
    return fetch(`${BASE_URL}/cart/addtocart/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify([itemObj])
    });
}

CART.addItemsToCurrentUserCart = async (itemsList) => {
    let userId = (await (await AUTH.getCurrentUser()).json()).id;
    return fetch(`${BASE_URL}/cart/addtocart/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify([...itemsList])
    });
}

CART.updateItemQuantityInCurrentUserCart = async (cartItemId, amt) => {
    let opType = "";
    if (amt >= 0)
        opType = "inc";
    else opType = "dec";
    return fetch(`${BASE_URL}/cart/updatequantity/${opType}/${cartItemId}/${Math.abs(amt)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

CART.removeItemFromCurrentUserCart = async (cartItemId) => {
    let cartId = (await (await AUTH.getCurrentUser()).json()).cartId;
    return fetch(`${BASE_URL}/cart/remove/${cartId}/${cartItemId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

CART.removeItemFromCart = async (cartId, cartItemId) => {
    return fetch(`${BASE_URL}/cart/remove/${cartId}/${cartItemId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

CART.clearCart = async (cartId) => {
    return fetch(`${BASE_URL}/cart/clear/${cartId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}


// Mount the API
export let CMS_API = window.CMS_API || {};
CMS_API.CART = CART;
window.CMS_API = CMS_API;