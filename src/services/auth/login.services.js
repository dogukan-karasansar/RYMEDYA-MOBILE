import {API_URL} from '@env';
import axios from 'axios';

export const login = (name, phone) => {
   var response = axios
    .post(`${API_URL}/api/login`, {
      name: name,
      phone: phone,
    })
    .then(response => {
      return response.data;
    });
    return response;
};
