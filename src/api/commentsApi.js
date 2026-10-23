import request from "../utils/request.js";

const baseUrl = import.meta.env.VITE_BASE_URL;


export const getCommentsByUserId = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
export const createComment = (path, data) => request(`${baseUrl}${path}`, 'POST', data);
export const getAllCarsComments = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
