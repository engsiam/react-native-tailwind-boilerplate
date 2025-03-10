import { configure } from "axios-hooks";
import Axios from "axios";
import Cookies from "js-cookie";

import { AUTH_TOKEN } from "@/constants";

const axios = Axios.create({
    baseURL: "http://localhost:3000/api/v1/",
    headers: {
        Accept: "application/json",
        configure: {},
    },
});

axios.interceptors.request.use(
    async (config) => {
        const token = Cookies.get(AUTH_TOKEN);

        if (token) {
            config.headers = {
                authorization: `Bearer ${token}`,
            };
        }
        return config;
    },
    (error) => Promise.reject(error)
);

configure({ axios, cache: false });