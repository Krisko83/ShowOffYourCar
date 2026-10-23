import request from "../utils/request.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUserById = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
export const createUserInfo = (path, data) => request(`${baseUrl}${path}`, 'POST', data);
export const updateUser = (path, data) => request(`${baseUrl}${path}`, 'PATCH', data);


