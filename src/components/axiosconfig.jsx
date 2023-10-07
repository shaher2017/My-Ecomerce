// axiosconfig.js
import axios from "axios";

const axiosinstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

axiosinstance.interceptors.request.use((config) => {
    config.headers.Authorization="The Token";
    return config;
});
axiosinstance.interceptors.response.use((config) => {
    return config;
});

export default axiosinstance;
