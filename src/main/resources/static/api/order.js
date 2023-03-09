import { BASE_URL } from "/api/utils/const.js";
import { AUTH } from "/api/auth.js";

export let ORDER = {};

ORDER.getAllOrders = async () => {
    return fetch(`${BASE_URL}/order/getorders`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

ORDER.getOrderByOrderId = async (orderId) => {
    return fetch(`${BASE_URL}/order/getorders/${orderId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}

ORDER.addOrder = async (orderType) => {
    if (typeof orderType === "string")
        orderType = orderType == "Lunch" ? 1 : 0;
    return fetch(`${BASE_URL}/order/addorders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify([
            { orderType }
        ])
    });
}

ORDER.updateOrderStatus = async (orderId, newStatus) => {
    return fetch(`${BASE_URL}/order/updatestatus/${orderId}/${newStatus}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        }
    });
}


// Mount the API
export let CMS_API = window.CMS_API || {};
CMS_API.ORDER = ORDER;
window.CMS_API = CMS_API;