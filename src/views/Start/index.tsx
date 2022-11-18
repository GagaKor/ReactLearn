import './styles.scss';
import { Link } from 'react-router-dom';

const Start = () => {
  //   const handleClickBtn = () => {};
  return (
    <>
      <div className="title">GagaLottos</div>
      <div className="startDiv">
        <Link to={'/PlayLotto'}>
          <div className="btnDiv">
            <div className="startBtn">Start </div>
          </div>
        </Link>
      </div>
      <div className="info">Made by Gaga Ver.</div>
    </>
  );
};

export default Start;
