const authUrl = import.meta.env.VITE_AUTH_URL;
const apikey = import.meta.env.VITE_API_KEY;



export default async function request(url, method = 'GET', data = null, opts = {}, image = false) {
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
        options.headers['Content-type'] = image ? data.type || 'application/octet-stream' : 'application/json';
        options.body = image ? data : JSON.stringify(data);
    }

    let response = await fetch(`${url}`, options)


    if (response.status === 401) {
        const result = await response.json();

        if (result.message === 'JWT expired' || result.code === 'PGRST303') {

            try {
                const refreshData = await refreshToken(refresh_token);

                if (!refreshData) {
                    throw new Error('Please login again!')
                }

                localStorage.setItem('auth', JSON.stringify(refreshData));
                user = refreshData;
                options.headers.Authorization = `Bearer ${user.access_token}`

                response = await fetch(`${url}`, options);
            } catch (error) {
                localStorage.removeItem('auth');
                throw error;
            }
        } else {
            throw new Error(result.message || 'Request failed');
        }

    }


    if (!response.ok) {
        if (response.status === 422) {
            throw new Error('User already exists!');
        }
        throw new Error(`HTTP response error! Error ${response.message}`)
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
};



async function refreshToken(refresh_token) {

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

};
