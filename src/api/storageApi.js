import request from "../utils/request.js";

const uploadImageUrl = import.meta.env.VITE_UPLOAD_IMAGE_URL;

export const uploadImage = (name, image) => request(`${uploadImageUrl}/${name}`, 'POST', image, {}, true)
 