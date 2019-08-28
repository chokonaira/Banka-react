import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('jwtToken');
  return axios.create({
    baseURL: 'https://banka101.herokuapp.com/api/v1',
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  });
};

export default axiosWithAuth;
