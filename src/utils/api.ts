import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 60,
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
        return await getReq("/");
    },
    async getBoards() {
        return await getReq("/boards");
    },
    async getBoard(id: string) {
        return await getReq(`/boards/${id}`);
    },
};
