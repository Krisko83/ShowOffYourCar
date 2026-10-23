import request from "../utils/request.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllLikes = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
export const getAllUserLikes = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
export const likeCar = (path, data) => request(`${baseUrl}${path}`, 'POST', data);
export const unlikeCar = (path) => request(`${baseUrl}${path}`, 'DELETE');