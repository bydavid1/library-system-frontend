import axios from 'axios';
import authHeader from './headers';
import { API_URL } from '../helpers/constants'

class UserService {
  getUsers() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  storeUser(user) {
    return axios({
      method: 'post',
      url: API_URL + 'user',
      headers: authHeader(), 
      data: user
    });
  }

  getRoles() {
    return axios.get(API_URL + 'role', { headers: authHeader() });
  }
}

export default new UserService();