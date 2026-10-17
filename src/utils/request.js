const baseUrl = import.meta.env.VITE_BASE_URL;
const authUrl = import.meta.env.VITE_AUTH_URL;
const apikey = import.meta.env.VITE_API_KEY;
const uploadImageUrl = import.meta.env.VITE_UPLOAD_IMAGE_URL


async function makeRequest(url, method = 'GET', data = null, opts = {}, image = false) {
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
        console.log(data);

        if (image) {
            options.headers['Content-type'] = data.type;
            options.body = data;
        } else {
            options.headers['Content-type'] = 'application/json'
            options.body = JSON.stringify(data)
        }
    }

    try {

        let response = await fetch(`${url}`, options)

        // console.log('from request:', response);


        if (response.status === 401) {
            sessionStorage.removeItem('auth');
 
            const refreshData = await refreshToken(refresh_token);

            sessionStorage.setItem('auth', JSON.stringify({ refreshData }));
            response = await fetch(`${url}`, options);
        }

        if (!response.ok) {
            throw new Error(`HTTP response error! Error ${response.status}`)
        }

        if (response.status === 204) {
            return null
        }

        return response.json();

    } catch (error) {

        alert(error.message)
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
const uploadImage = (name, image) => makeRequest(`${uploadImageUrl}/${name}`, 'POST', image, {}, true)

const request = {
    register,
    login,
    getAll,
    getById,
    post,
    remove,
    update,
    updateUser,
    uploadImage
}

export default request;
