import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
const Home = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await api.main();
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div>
        <b>{data}</b>
      </div>
      <div>
        <Link to="/start">Start</Link>
      </div>
    </>
  );
};

export default Home;
