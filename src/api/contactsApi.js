import request from "../utils/request.js";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getAllQuestions = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
export const createQuestion = (path, data) => request(`${baseUrl}${path}`, 'POST', data);