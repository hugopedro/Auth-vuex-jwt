import axios from 'axios';

const API_URL = `${process.env.VUE_APP_API_URL}/api/auth/`;
const API_CENTRAL = `${process.env.VUE_APP_CENTRAL_URL}/`;

class AuthService {

  handleCredentials(user) {
    
    const planCredentials = `${user.username}:${user.password}`;
    const encodedCredentials = btoa(planCredentials);
    const credentials = `Basic ${encodedCredentials}`;

    return credentials;
  }

  login(user) {
    const credentials = this.handleCredentials(user);
    const config = {headers:{Authorization:credentials}}
    
    return axios
      .post(API_CENTRAL + 'login', null, config)
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();