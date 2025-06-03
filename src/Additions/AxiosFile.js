import axios from "axios";
import { API } from "./API";
import Cookie from "cookie-universal";

const cookie = Cookie();
const Token = cookie.get("e-commerce");

export const Axios = axios.create({
    baseURL: API ,
    headers: {
        Authorization: `Bearer ${Token}`,
    },
});





