import axios from 'axios';
import authHeader from './headers';
import { API_URL } from '../helpers/constants'

class BookService {
  getBooks() {
    return axios.get(API_URL + 'book', { headers: authHeader() });
  }
  storeBook() {
    return axios.post(API_URL + 'book', { headers: authHeader() });
  }
}

export default new BookService();