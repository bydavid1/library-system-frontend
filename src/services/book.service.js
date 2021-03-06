import axios from 'axios';
import authHeader from './headers';
import { API_URL } from '../helpers/constants'

class BookService {
  getBooks() {
    return axios.get(API_URL + 'book', { headers: authHeader() });
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
    return axios({
      method: 'post',
      url: API_URL + `book/${id}/request`,
      headers: authHeader()
    });
  }

  searchBook(query) {
    return axios({
      method: 'post',
      url: API_URL + `book/search`,
      headers: authHeader(true),
      data: {
        query: query
      }
    });
  }
}

export default new BookService();