import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lottery-7c083.firebaseio.com/'
})

export default api;