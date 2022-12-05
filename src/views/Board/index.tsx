import './styles.scss';
import Table from 'react-bootstrap/Table';
import api from '../../utils/api';
import { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';

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
  const [totalSize, setTotalSize] = useState<number>(0);
  const [thisPage, setThisPage] = useState<number>(1);
  const [categoryId, setCategoryId] = useState<string>('');

  type GetBoard = {
    categoryId: string;
    page: number;
    take: number;
  };
  const fetchBoards = async () => {
    const categoryRes = await api.get('/category');
    setCategoryId(categoryRes.data[0].id);
    const getBoard: GetBoard = {
      categoryId: categoryRes.data[0].id,
      page: 1,
      take: 10,
    };
    const boardRes = await api.get('/boards', {
      params: getBoard,
    });
    const boardData = boardRes.data.boards;

    const newBoardArr: Board[] = [];
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
    setBaord(newBoardArr);
    setTotalSize(10);
    setThisPage(1);
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  const updatePage = async (currentPage: number) => {
    setThisPage(currentPage);

    const getBoard: GetBoard = {
      categoryId,
      page: currentPage,
      take: totalSize,
    };
    const boardRes = await api.get('/boards', {
      params: getBoard,
    });
    const boardData = boardRes.data.boards;

    const newBoardArr: Board[] = [];
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
    setBaord(newBoardArr);
  };

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
      <Pagination current={thisPage} total={count} pageSize={totalSize} onChange={updatePage}></Pagination>
    </div>
  );
};

export default Board;
