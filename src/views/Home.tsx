import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import { BrowserView, MobileView } from 'react-device-detect';

const Home = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const res = await api.get('/');
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BrowserView>
        <h1>Home</h1>
        <div>
          <b>{data}</b>
        </div>
        <div>
          <Link to="/start">Start</Link>
        </div>
      </BrowserView>
      <MobileView>
        <h1>Home</h1>
        <div>
          <b>{data}</b>
        </div>
        <div>
          <Link to="/start">Start</Link>
        </div>
      </MobileView>
    </>
  );
};

export default Home;
