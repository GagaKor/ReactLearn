import axios from 'axios';

interface UserCareteDTO {
  username: string;
  password: string;
}

const instance = axios.create({
  baseURL: 'http://localhost:3001',
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
  async getBoards() {
    return await getReq('/boards');
  },
  async getBoard(id: string) {
    return await getReq(`/boards/${id}`);
  },
  async authSignIn(body: UserCareteDTO) {
    const {username, password} = body;
    return await instance.post('/auth/signin', {
        username,
        password
    })
  },
  async signUp(body:UserCareteDTO){
    const {username, password} = body;
    return await instance.post('/auth/signup', {
        username,
        password
    });
  }
};
