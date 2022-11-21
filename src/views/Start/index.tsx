import './styles.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../utils/api';

const Start = () => {
  return (
    <div className="start-container">
      <div className="start-Wrap">
        <div className="start-title">GagaLottos</div>

        <Link to={'/PlayLotto'}>
          <div className="start-btn-box">
            <div className="start-btn">Start </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Start;
