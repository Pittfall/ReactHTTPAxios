// This is an instance of axios that can have it's own baseURL or other default settings.
// Any place using this instance can also have its own interceptors as well.  One thing
// to note is that any global settings will of course will not be present in this instance.

import axios from 'axios';

const instance = axios.create({
    BaseURL: 'https://jsonplaceholder.typicode.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;