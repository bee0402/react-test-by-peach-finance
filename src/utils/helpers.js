import axios from 'axios';
import { notify } from 'react-notify-toast';

//api server
export const ROOT_URL = 'http://localhost:5000/v1';

export function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['x-access-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-access-token'];
    }
}

export function showToast(type, message) {
    notify.show(message, type);
}
