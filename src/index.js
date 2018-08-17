import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
// We don't use an authorization token here but showing that it can be set.
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// This is already the default but showing that it can be set.
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);

    return request;
}, error => {
    console.log(error);

    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);

    return response;
}, error => {
    console.log(error);

    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
