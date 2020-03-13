import axios from 'axios';

export const myAxios = (url, method, data) => axios({
  method,
  url: `//localhost:8080/${url}`,
  headers: localStorage.authToken ? {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.authToken}`,
  } : { 'Content-Type': 'application/json' },
  data: JSON.stringify(data),
});
