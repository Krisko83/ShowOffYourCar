import request from "../utils/request.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllLikes = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
