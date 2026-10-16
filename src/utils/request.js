const baseUrl = import.meta.env.VITE_BASE_URL;
const authUrl = import.meta.env.VITE_AUTH_URL;
const apikey = import.meta.env.VITE_API_KEY;


async function makeRequest(url, method = 'GET', data = null, opts = {}) {
    const storageData = localStorage.getItem('auth');
    let user = {};

    if (storageData) {
        user = JSON.parse(storageData)
    }


    const options = {
        headers: {
            apikey,
            ...(user.access_token && {
                Authorization: `Bearer ${user.access_token}`
            }),
            "Prefer": 'return=representation',
        },

        ...opts
    }

    if (method !== 'GET') {
        options.method = method
    }

    if (data) {
        options.headers['Content-type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    const response = await fetch(`${url}`, options)

    if (!response.ok) {
        throw new Error(`HTTP response error! Error ${response.status}`)
    }

    if (response.status === 204) {
        return null
    }


    return response.json();
};


const register = (data) => makeRequest(`${authUrl}/signup`, 'POST', data);
const login = (data) => makeRequest(`${authUrl}/token?grant_type=password`, 'POST', data);

const updateUser = (data) => makeRequest(`${authUrl}/user`, 'PATCH', data);

const getAll = (path) => makeRequest(`${baseUrl}${path}`);
const getById = (path) => makeRequest(`${baseUrl}${path}`);
const post = (path, data) => makeRequest(`${baseUrl}${path}`, 'POST', data);
const remove = (path) => makeRequest(`${baseUrl}${path}`, 'DELETE');
const update = (path, data) => makeRequest(`${baseUrl}${path}`, 'PUT', data);
const updatePassword = (path, data) => makeRequest(`${baseUrl}${path}`, 'PATCH', data);


const request = {
    register,
    login,
    getAll,
    getById,
    post,
    remove,
    update,
    updatePassword,
    updateUser
}

export default request;
