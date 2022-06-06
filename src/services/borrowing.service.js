import axios from 'axios';
import authHeader from './headers';
import { API_URL } from '../helpers/constants'

class BorrowingService {
  getAllBorrowings() {
    return axios.get(API_URL + 'borrowing', { headers: authHeader() });
  }

  getBorrowingsByUser(id) {
    return axios.get(API_URL + `borrowing/user`, { headers: authHeader() });
  }

  confirmBorrowing(id) {
    return axios({
      method: 'put',
      url: API_URL + `book/borrowing/${id}/confirm`,
      headers: authHeader(), 
    });
  }

  refuseBorrowing(id) {
    return axios({
      method: 'put',
      url: API_URL + `book/borrowing/${id}/refuse`,
      headers: authHeader(), 
    }); 
  }

  returnBook(id) {
    return axios({
      method: 'put',
      url: API_URL + `book/return/${id}`,
      headers: authHeader(), 
    }); 
  }
}

export default new BorrowingService();