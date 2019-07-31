import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://banka--react.herokuapp.com/api/v1',
});

export default instance;
