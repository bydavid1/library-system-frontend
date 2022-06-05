import axios from 'axios';
import authHeader from './headers';
import { API_URL } from '../helpers/constants'

class UserService {
  getUsers() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
}

export default new UserService();