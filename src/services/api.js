import axios from 'axios';

/* export const api = axios.create({
  baseURL: './server.json'
}) */



export const apiAdonis = axios.create({
  baseURL: 'http://localhost:3333',
  /* headers: {'Authorization': `Bearer ${auth.token.token}`} */
})

/* console.log('AUTH: ', JSON.stringify(auth.token.token) ) */


