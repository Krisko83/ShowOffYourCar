import request from "../utils/request.js";

const baseUrl = import.meta.env.VITE_BASE_URL;


export const getAllCars = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
export const getAllUserCars = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
export const getCarById = (path, opt) => request(`${baseUrl}${path}`, 'GET', null, opt);
export const createCar = (path, data) => request(`${baseUrl}${path}`, 'POST', data);
export const removeCar = (path) => request(`${baseUrl}${path}`, 'DELETE');
export const updateCar = (path, data) => request(`${baseUrl}${path}`, 'PATCH', data);