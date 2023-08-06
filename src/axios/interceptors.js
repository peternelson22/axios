import axios from 'axios';

export const authFetch = axios.create({
  baseURL: 'https://course-api.com',
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers['Accept'] = 'application/json';
    console.log('requested');
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
      //do something as in case of authentication if a user tries to login multiple times with wrong credentials
    }
    return Promise.reject(error);
  }
);
