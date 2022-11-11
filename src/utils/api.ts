import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 3600,
});

const getReq = async (url: string, params?: any) => {
  try {
    return await instance.get(url, params);
  } catch (err) {
    throw new Error();
  }
};

export default {
  async main() {
    return await getReq('/');
  },
};
