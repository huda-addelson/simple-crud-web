import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default Axios;
