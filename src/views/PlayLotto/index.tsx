import './styles.scss';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import api from '../../utils/api';
import { useAppDispatch, useAppSelector } from '../../store/config';
import { setGame } from '../../store/slices/gameSlice';

const PlayLotto = () => {
  const [lotto, setLotto] = useState({
    round: 0,
    lotto_number: [],
  });
  const include: number[] = [];
  const exclude: number[] = [];

  const [data, setData] = useState({
    playGame: 1,
    deviation: 0,
    include,
    exclude,
  });

  const fetchData = async () => {
    const res = await api.get('/lotto/thisweek');

    const lottoData = {
      round: res.data[0].round,
      lotto_number: JSON.parse(res.data[0].lotto_number),
    };

    setLotto(lottoData);
  };
  useEffect(() => {
    fetchData();
  });

  function handleClickHome() {
    document.location.href = '/Start';
  }
  function handleOnkeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      console.log(e);
    }
  }
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'deviation') {
      if (Number(e.target.value) < 0) e.target.value = '0';
      data.deviation = Number(e.target.value);
      setData(data);
    }
  }
  function handleOnChangeInclude(e: ChangeEvent<HTMLInputElement>) {
    if (data.include.includes(Number(e.target.value))) return;
    if (data.include.length > 6) return;
    data.include = [...data.include, Number(e.target.value)];

    setData(data);
  }
  function handleOnChangeExclude(e: ChangeEvent<HTMLInputElement>) {
    if (data.exclude.includes(Number(e.target.value))) return;
    data.exclude = [...data.exclude, Number(e.target.value)];

    setData(data);
  }

  return (
    <>
      <div className="homeBtnWrap" onClick={handleClickHome}>
        <MdHome size={25} color={'#5b6860'} />
      </div>

      <form className="main-form">
        <section className="win-section">
          <div className="win-section-container">
            <p className="win-title">This week{`'`}s lotto Round</p>
            <div className="win-number-container">
              <span className="win-number win-number--one">{lotto.lotto_number[0]}</span>
              <span className="win-number win-number--two">{lotto.lotto_number[1]}</span>
              <span className="win-number win-number--three">{lotto.lotto_number[2]}</span>
              <span className="win-number win-number--four">{lotto.lotto_number[3]}</span>
              <span className="win-number win-number--five">{lotto.lotto_number[4]}</span>
              <span className="win-number win-number--six">{lotto.lotto_number[5]}</span>
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="input-container input-container--gameTimes">
            <div className="input-box">
              <label>Number of games</label>
              <div className="input-box--text">
                <span
                  className="input-count"
                  onClick={() => {
                    if (data.playGame < 5) {
                      data.playGame += 1;
                      setData(data);
                    }
                  }}
                >
                  <AiFillPlusCircle />
                </span>
                <span className="input-number">{data.playGame}</span>
                <span
                  className="input-count"
                  onClick={() => {
                    if (data.playGame > 1) {
                      data.playGame -= 1;
                      setData(data);
                    }
                  }}
                >
                  <AiFillMinusCircle />
                </span>
              </div>
            </div>
          </div>
          <div className="input-container input-container--gameTimes">
            <div className="input-box">
              <label>Deviation</label>
              <input type="number" name="deviation" onChange={handleOnChange} />
            </div>
          </div>
          <div className="input-container">
            <div className="input-box">
              <label>Included Number</label>
              <input type="text" placeholder="Enter Number" />
            </div>
            <div className="reserved-box">
              <div className="reserved-value">1</div>
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
