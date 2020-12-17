import axios from 'axios';

const api = axios.create({
  baseURL: './server.json'
})

export default api;