import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/leads`,
});

export default axiosClient;