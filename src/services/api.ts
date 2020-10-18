import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.8.103:4000'
});

export default api;