const url = import.meta.env.VITE_BASE_URL;
const apikey = import.meta.env.VITE_API_KEY; 
 
export default async function request(path = '/', method = 'GET', data ,opts = {}) {

    const options = {
    headers: {
            apikey
        }, 
        ...opts
    }

    if(method !== 'GET') {
        options.method = method         
    }

    if(data) {
        options.headers['Content-type'] = 'application/json'
        options.body = JSON.stringify(data)
    }

    const response = await fetch(`${url}${path}`, options)

    if(!response.ok) {
        throw new Error(`HTTP response error! Error ${response.status}`)
    }

    if(response.status === 204) {
        return null
    }

     if(response.status === 201) {
        return null
    }

    return response.json();
};

