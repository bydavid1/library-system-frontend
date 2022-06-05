import axios from "axios";

import { API_URL } from '../helpers/constants'

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "auth/login", { email, password })
      .then((response) => {
        if (response.data.token) {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    console.log('romoving session');
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