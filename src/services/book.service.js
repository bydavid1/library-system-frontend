import axios from 'axios';
import authHeader from './headers';
import { API_URL } from '../helpers/constants'

class BookService {
  getBooks() {
    return axios.get(API_URL + 'book', { headers: authHeader() });
  }
  
  getBooksForStudent() {
    return axios.get(API_URL + 'book/student', { headers: authHeader() });
  }

  storeBook(book) {
    return axios({
      method: 'post',
      url: API_URL + 'book',
      headers: authHeader(), 
      data: book
    });
  }

  requestBook(id) {
    return axios.get(API_URL + `book/${id}/request`, { headers: authHeader() });
  }
}

export default new BookService();