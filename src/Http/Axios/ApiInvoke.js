import axios from 'axios';
import HandleError from './HandleError';
import { BASE_URL, HTTP_HEADERS } from './Config';

axios.defaults.baseURL = BASE_URL;

// Don't need to set these this time.
axios.defaults.headers.common['Accept'] = HTTP_HEADERS.ACCEPT;
axios.defaults.headers.post['Content-Type'] = HTTP_HEADERS.CONTENT_TYPE;

// HTTP GET
export const get = (path) => {
    return new Promise((resolve, reject) => {
        axios.get(path)
            .then(response => { resolve(response) })
            .catch(error => { reject(HandleError(error)) });
    });
};

export const post = (path, data) => {
    return new Promise((resolve, reject) => {
        axios.post(path, data)
            .then(response => { resolve(response) })
            .catch(error => { reject(HandleError(error)) });
    });
};

export const del = (path) => {
    return new Promise((resolve, reject) => {
        axios.delete(path)
            .then(response => { resolve(response) })
            .catch(error => { reject(HandleError(error)) });
    });
};

// Usage of interceptors.
// axios.interceptors.request.use(request => {
//     console.log(request);

//     return request;
// }, error => {
//     console.log(error);

//     return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//     console.log(response);

//     return response;
// }, error => {
//     console.log(error);

//     return Promise.reject(error);
// });