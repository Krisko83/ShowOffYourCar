const baseUrl = import.meta.env.VITE_BASE_URL;
const authUrl = import.meta.env.VITE_AUTH_URL;
const apikey = import.meta.env.VITE_API_KEY;


async function makeRequest(url, method = 'GET', data = null, opts = {}) {
    const storageData = localStorage.getItem('auth');
    let user = {};

    if (storageData) {
        user = JSON.parse(storageData)
    }

    const refresh_token = user.refresh_token;

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

    try {

        const response = await fetch(`${url}`, options)



        if (!response.ok) {
            throw new Error(`HTTP response error! Error ${response.status}`)
        }

        if (response.status === 204) {
            return null
        }

        return response.json();
        
    } catch (error) {
        if (error.status === 401) {
            const refreshData = await refreshToken(refresh_token);
            console.log('Token refresh try!', refreshData);

            return sessionStorage.setItem('auth', JSON.stringify({ refreshData }));

        }

        return error.message
    }


};

async function refreshToken(refresh_token) {
    try {
        const response = await fetch(`${authUrl}/token?grant_type=refresh_token`, {
            method: 'POST',
            headers: {
                apikey,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ refresh_token })
        })


        if (!response.ok) {
            localStorage.removeItem('auth');
            throw new Error(response.message || 'Failed to refresh token. Please login');
        }

        const data = await response.json();

        return data;

    } catch (error) {
        alert(error)
    }

};


const register = (data) => makeRequest(`${authUrl}/signup`, 'POST', data);
const login = (data) => makeRequest(`${authUrl}/token?grant_type=password`, 'POST', data);

const updateUser = (data) => makeRequest(`${authUrl}/user`, 'PUT', data);

const getAll = (path) => makeRequest(`${baseUrl}${path}`);
const getById = (path) => makeRequest(`${baseUrl}${path}`);
const post = (path, data) => makeRequest(`${baseUrl}${path}`, 'POST', data);
const remove = (path) => makeRequest(`${baseUrl}${path}`, 'DELETE');
const update = (path, data) => makeRequest(`${baseUrl}${path}`, 'PATCH', data);


const request = {
    register,
    login,
    getAll,
    getById,
    post,
    remove,
    update,
    updateUser
}

export default request;
