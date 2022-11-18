import './styles.scss';
import { Link } from 'react-router-dom';

const PlayLotto = () => {
  return (
    <>
      {/* <div className="homeBtnWrap">
    <font-awesome-icon icon="house" className="house" />
  </div> */}

      <form className="main-form">
        <section className="win-section">
          <div className="win-section-container">
            <p className="win-title">This week{`'`}s lotto</p>
            <div className="win-number-container">
              <span className="win-number win-number--one">1</span>
              <span className="win-number win-number--two">3</span>
              <span className="win-number win-number--three">30</span>
              <span className="win-number win-number--four">20</span>
              <span className="win-number win-number--five">10</span>
              <span className="win-number win-number--six">5</span>
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="input-container input-container--gameTimes">
            <div className="input-box">
              <label>Number of games</label>
              <input type="number" />
            </div>
          </div>
          <div className="input-container input-container--gameTimes">
            <div className="input-box">
              <label>Deviation</label>
              <input type="number" />
            </div>
          </div>
          <div className="input-container">
            <div className="input-box">
              <label>Included Number</label>
              <input type="text" placeholder="Enter Number" />
            </div>
            <div className="reserved-box">
              <div className="reserved-value"></div>
            </div>
          </div>
          <div className="input-container">
            <div className="input-box">
              <label>Exclusion number</label>
              <input type="text" placeholder="Enter Number" />
            </div>
            <div className="reserved-box">
              <div className="reserved-value">1</div>
            </div>
          </div>
        </section>
      </form>
      <Link to={'/ResultLotto'}>
        <div className="submit-container">
          <div className="submit-input">Receive</div>
        </div>
      </Link>
    </>
  );
};

export default PlayLotto;
