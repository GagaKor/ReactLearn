import './styles.scss';
import { Link } from 'react-router-dom';
import { setGame } from '../../store/slices/gameSlice';
import { useAppDispatch } from '../../store/config';

const Game = () => {
  const disPatch = useAppDispatch();
  disPatch(
    setGame({
      playGame: 1,
      deviation: 0,
      include: [],
      exclude: [],
      consecution: 'any',
      max: 170,
      min: 106,
    }),
  );

  return (
    <div className="start-container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="start-title ">GagaLottos</div>
      </div>

      <div className="btn-container d-flex flex-column justify-content-center align-items-center">
        <div className="btn-box">
          <Link to={'/playlotto'} className="start-btn text-decoration-none">
            Start
          </Link>
        </div>
        <div className="btn-box">
          <Link to={'/lottohistory'} className="start-btn text-decoration-none">
            History
          </Link>
        </div>
        <div className="btn-box">
          <Link to={'/lotto-select-history'} className="start-btn text-decoration-none">
            Recommended History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
