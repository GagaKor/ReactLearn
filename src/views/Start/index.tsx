import './styles.scss';
import { Link } from 'react-router-dom';

const Start = () => {
  //   const handleClickBtn = () => {};
  return (
    <>
      <div className="title">GagaLottos</div>
      <div className="startDiv">
        <div className="btnDiv">
          <div className="startBtn">
            <Link to={'/PlayLotto'}>Start</Link>
          </div>
          {/* <button className="startBtn">Start</button> */}
        </div>
      </div>
      <div className="info">Made by Gaga Ver.</div>
    </>
  );
};

export default Start;
