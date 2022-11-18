import './styles.scss';
import { MdOutlineDoubleArrow, MdHome } from 'react-icons/md';
import { BiRefresh } from 'react-icons/bi';
const ResultLotto = () => {
  return (
    <div className="result-lotto__container">
      <div className="homeBtnWrap">
        <MdHome size={25} color={'#5b6860'} />
      </div>
      <section className="win-section">
        <p className="win-section__title">Recommended Number</p>

        <div className="win-section__content">
          <div className="win-section__content__list">
            <div className="win-number__idx__box">1</div>
            <div className="win-number__arrow__box">
              <MdOutlineDoubleArrow />
            </div>
            <div className="win-number__box">
              <span className="win-number win-number--one">1</span>
              <span className="win-number win-number--two">2</span>
              <span className="win-number win-number--three">3</span>
              <span className="win-number win-number--four">4</span>
              <span className="win-number win-number--five">5</span>
              <span className="win-number win-number--six">6</span>
            </div>
            <div className="win-number__refresh__box">
              <BiRefresh />
            </div>
          </div>
        </div>
      </section>
      <div className="submit-container">
        <input className="submit-input" type="submit" value="Back" />
      </div>
    </div>
  );
};

export default ResultLotto;
