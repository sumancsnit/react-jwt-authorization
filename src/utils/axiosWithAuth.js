import axios from 'axios';

const axiosAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: '',
    headers: {
      authorization: token,
    },
  });
};

export default axiosAuth;
