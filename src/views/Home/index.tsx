import './styles.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import { IoGameController } from 'react-icons/io5';

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
    <div className="home-container">
      <div className="home-title">GaGa{"'"}s Home</div>
      <div className="home-list">
        <div className="home-list-title">Play List</div>
        <div className="home-list-box">
          <div className="home-list-box--icon">
            <IoGameController />
          </div>
          <div className="home-list-box--index">
            <Link to="/start">Play Lotto</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
