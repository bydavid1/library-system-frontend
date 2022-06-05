import axios from 'axios';
import authHeader from './headers';
import { API_URL } from '../helpers/constants'

class BorrowingService {
  getAllBorrowings() {
    return axios.get(API_URL + 'borrowing', { headers: authHeader() });
  }

  confirmBorrowing(id) {
    return axios.put(API_URL + `borrowing/${id}/confirm`, { headers: authHeader() });
  }

  refuseBorrowing(id) {
    return axios.put(API_URL + `borrowing/${id}/refuse`, { headers: authHeader() });
  }

  returnBook(id) {
    return axios.put(API_URL + `book/return/${id}`, { headers: authHeader() });
  }
}

export default new BorrowingService();