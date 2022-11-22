import './styles.scss';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="start-container">
      <div className="start-title">GagaLottos</div>
      <div className="start-title-made">Made BY Mr.SHIN</div>

      <Link to={'/PlayLotto'} className="start-btn">
        Start
      </Link>
    </div>
  );
};

export default Start;
