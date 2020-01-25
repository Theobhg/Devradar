import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.140.1.5:5555', // Aqui botamos nosso localhost
});

export default api;