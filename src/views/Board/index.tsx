import './styles.scss';
import Table from 'react-bootstrap/Table';
import api from '../../utils/api';
import { useEffect, useState } from 'react';
import Pagenation from '../../components/Pagenation';

const Board = () => {
  type Board = {
    id: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
    status: string;
    username: string;
  };

  const [board, setBaord] = useState<Board[]>([]);
  const [count, setCount] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [thisPage, setThisPage] = useState<number>(1);

  const fetchBoards = async () => {
    const categoryRes = await api.get('/category');
    const boardRes = await api.get('/boards', { params: categoryRes.data.id });

    const boardData = boardRes.data.boards;

    const newBoardArr = [...board];
    for (const b of boardData) {
      const newBoard: Board = {
        id: b.id,
        title: b.title,
        createdAt: b.createdAt,
        updatedAt: b.updatedAt,
        status: b.status,
        username: b.user.username,
      };
      newBoardArr.push(newBoard);
    }
    setCount(boardRes.data.count);
    setBaord([...newBoardArr]);
    const total = Math.ceil(boardRes.data.count / 10);
    setTotalPage(total);
    setThisPage(1);
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div>
      <div>total : {count}</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>CreatedAt</th>
          </tr>
        </thead>
        <tbody>
          {board && board.length > 0 ? (
            board.map((v, idx) => {
              return (
                <tr key={v.id}>
                  <td>{idx}</td>
                  <td>{v.title}</td>
                  <td>{v.createdAt.toString()}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={3}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Pagenation totalPage={totalPage} thisPage={thisPage}></Pagenation>
    </div>
  );
};

export default Board;
