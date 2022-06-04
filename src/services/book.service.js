import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from '../utils/constants'

class UserService {
  getBooks() {
    return axios.get(API_URL + 'book');
  }
  storeBook() {
    return axios.post(API_URL + 'book', { headers: authHeader() });
  }
}

export default new UserService();