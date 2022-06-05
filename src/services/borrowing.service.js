import axios from 'axios';
import authHeader from './headers';
import { API_URL } from '../helpers/constants'

class BorrowingService {
  getAllBorrowings() {
    return axios.get(API_URL + 'borrowing', { headers: authHeader() });
  }
}

export default new BorrowingService();