import { AUTH } from "/api/auth.js";
import { ITEM } from "/api/item.js";
import { USER } from "/api/user.js";
import { ORDER } from "/api/order.js";
import { MENU } from "/api/menu.js";
import { FEEDBACK } from "/api/feedback.js";
import { CART } from "/api/cart.js";

export let CMS_API = {};
CMS_API.AUTH = AUTH;
CMS_API.ITEM = ITEM;
CMS_API.USER = USER;
CMS_API.ORDER = ORDER;
CMS_API.MENU = MENU;
CMS_API.FEEDBACK = FEEDBACK;
CMS_API.CART = CART;
window.CMS_API = CMS_API;