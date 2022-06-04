import axios from "axios";

import { API_URL } from '../utils/constants'

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "auth/signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      return { Authorization: user.accessToken };
    } else {
      return {};
    }
  }
}
export default new AuthService();