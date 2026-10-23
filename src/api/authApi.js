import request from "../utils/request.js";

const authUrl = import.meta.env.VITE_AUTH_URL;

export const register = (data) => request(`${authUrl}/signup`, 'POST', data);
export const login = (data) => request(`${authUrl}/token?grant_type=password`, 'POST', data);
export const logout = () => request(`${authUrl}/logout`, 'POST')
export const updateUser = (data) => request(`${authUrl}/user`, 'PUT', data);

