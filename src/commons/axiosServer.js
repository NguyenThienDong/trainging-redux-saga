import axios from 'axios';

class AxiosServer {
  constructor() {
    const instance = axios.create();
    this.instance = instance;
  }

  handleSuccess = response => response;

  handleError = error => Promise.reject(error);


  get(url) {
    return this.instance.get(url);
  }
}

export default new AxiosServer();
