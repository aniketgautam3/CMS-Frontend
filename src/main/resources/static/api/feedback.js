import { BASE_URL } from "/api/utils/const.js";
import { AUTH } from "/api/auth.js";

export let FEEDBACK = {};

FEEDBACK.addItem = async (orderId, rating, comments) => {
    return fetch(`${BASE_URL}/order/addfeedback/${orderId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await AUTH.getCurrentUserToken()}`
        },
        body: JSON.stringify({
            "rating" : rating,
            "comments" : comments
        })
    });
}

// Mount the API
export let CMS_API = window.CMS_API || {};
CMS_API.FEEDBACK = FEEDBACK;
window.CMS_API = CMS_API;