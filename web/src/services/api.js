import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5555' // endereço localhost.
});

export default api;