import './styles.scss';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { MouseEvent, ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import api from '../../utils/api';
import { useAppDispatch, useAppSelector } from '../../store/config';
import { setGame } from '../../store/slices/gameSlice';
import { BrowserView, MobileView } from 'react-device-detect';

const PlayLotto = () => {
  const disPatch = useAppDispatch();
  const { game } = useAppSelector((state) => state.game);

  const [lotto, setLotto] = useState({
    round: 0,
    lotto_number: [],
  });

  const [deviation, setDeviation] = useState<number>(0);

  const [count, setCount] = useState(1);

  type InExclude = {
    id: string;
    value: number;
  };
  const [includeArr, setIncludeArr] = useState<InExclude[]>([]);
  const [excludeArr, setExcludeArr] = useState<InExclude[]>([]);

  function changeArr(arr: number[]) {
    return arr.map((v: number) => {
      const randomStr = Math.random().toString(36).substring(2, 6);
      const data: InExclude = {
        id: randomStr,
        value: v,
      };
      return data;
    });
  }

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

    setCount(game.playGame);
    setDeviation(game.deviation);
    setIncludeArr(changeArr(game.include));
    setExcludeArr(changeArr(game.exclude));
  }, []);

  function handleClickHome() {
    disPatch(
      setGame({
        playGame: 1,
        deviation: 0,
        include: [],
        exclude: [],
      }),
    );
    document.location.href = '/Start';
  }
  const handleOnkeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const targetValue = Number(e.currentTarget.value);
    const randomStr = Math.random().toString(36).substring(2, 6);
    if (e.key === 'Enter') {
      if (targetValue > 0 && targetValue < 46) {
        if (e.currentTarget.id === 'include') {
          if (
            includeArr.length < 6 &&
            includeArr.filter((v) => v.value === targetValue).length < 1 &&
            excludeArr.filter((v) => v.value === targetValue).length < 1
          ) {
            const data: InExclude = {
              id: randomStr,
              value: targetValue,
            };
            const newArr = [...includeArr, data];
            newArr.sort((a, b) => a.value - b.value);
            setIncludeArr(newArr);
          }
        } else {
          if (
            excludeArr.length < 5 &&
            excludeArr.filter((v) => v.value === targetValue).length < 1 &&
            includeArr.filter((v) => v.value === targetValue).length < 1
          ) {
            const data: InExclude = {
              id: randomStr,
              value: targetValue,
            };
            const newArr = [...excludeArr, data];
            newArr.sort((a, b) => a.value - b.value);
            setExcludeArr(newArr);
          }
        }
      }
      e.currentTarget.value = '';
      e.preventDefault();
    }
  };
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === 'deviation' && Number(e.target.value) >= 0) {
      setDeviation(Number(e.target.value));
    }
  }

  const handleOnClickRemoveIncludeArr = (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    const data = includeArr.filter((v) => v.id !== id);
    setIncludeArr([...data]);
  };
  const handleOnClickRemoveExcludeArr = (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    const data = excludeArr.filter((v) => v.id !== id);
    setExcludeArr([...data]);
  };
  const onClickReceive = () => {
    const include = includeArr.map((v) => v.value);
    const exclude = excludeArr.map((v) => v.value);
    const data = {
      playGame: count,
      deviation,
      include,
      exclude,
    };
    disPatch(setGame(data));
  };

  return (
    <div className="playLotto">
      <BrowserView>
        <div className="playLotto-Container">
          <div className="main-form">
            <div className="homeBtnWrap" onClick={handleClickHome}>
              <MdHome size={25} color={'#5b6860'} />
            </div>
            <div className="win-section">
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
            </div>

            <div className="form-section">
              <div className="input-container input-container--gameTimes">
                <div className="input-box">
                  <label>Number of games</label>
                  <div className="input-box--text">
                    <span
                      className="input-count"
                      onClick={() => {
                        if (count < 5) {
                          const data = count + 1;
                          setCount(data);
                        }
                      }}
                    >
                      <AiFillPlusCircle />
                    </span>
                    <span className="input-number">{count}</span>
                    <span
                      className="input-count"
                      onClick={() => {
                        if (count > 1) {
                          const data = count - 1;
                          setCount(data);
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
                  <input type="text" name="deviation" value={deviation} onChange={handleOnChange} />
                </div>
              </div>
              <div className="input-container">
                <div className="input-box">
                  <label>Included Number</label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    id="include"
                    name="include"
                    onKeyDown={handleOnkeyPress}
                  />
                </div>
                <div className="reserved-box">
                  {includeArr.map((v) => {
                    return (
                      <div key={v.id} id={v.id} className="reserved-value" onClick={handleOnClickRemoveIncludeArr}>
                        {v.value}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="input-container">
                <div className="input-box">
                  <label>Exclusion number</label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    id="exclude"
                    name="exclude"
                    onKeyDown={handleOnkeyPress}
                  />
                </div>
                <div className="reserved-box">
                  {excludeArr.map((v) => {
                    return (
                      <div key={v.id} id={v.id} className="reserved-value" onClick={handleOnClickRemoveExcludeArr}>
                        {v.value}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link to={'/ResultLotto'} onClick={onClickReceive}>
              <div className="submit-container">
                <div className="submit-input">Receive</div>
              </div>
            </Link>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="playLotto-Container">
          <div className="main-form">
            <div className="homeBtnWrap" onClick={handleClickHome}>
              <MdHome size={25} color={'#5b6860'} />
            </div>
            <div className="win-section">
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
            </div>

            <div className="form-section">
              <div className="input-container input-container--gameTimes">
                <div className="input-box">
                  <label>Number of games</label>
                  <div className="input-box--text">
                    <span
                      className="input-count"
                      onClick={() => {
                        if (count < 5) {
                          const data = count + 1;
                          setCount(data);
                        }
                      }}
                    >
                      <AiFillPlusCircle />
                    </span>
                    <span className="input-number">{count}</span>
                    <span
                      className="input-count"
                      onClick={() => {
                        if (count > 1) {
                          const data = count - 1;
                          setCount(data);
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
                  <input type="text" name="deviation" value={deviation} onChange={handleOnChange} />
                </div>
              </div>
              <div className="input-container">
                <div className="input-box">
                  <label>Included Number</label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    id="include"
                    name="include"
                    onKeyDown={handleOnkeyPress}
                  />
                </div>
                <div className="reserved-box">
                  {includeArr.map((v) => {
                    return (
                      <div key={v.id} id={v.id} className="reserved-value" onClick={handleOnClickRemoveIncludeArr}>
                        {v.value}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="input-container">
                <div className="input-box">
                  <label>Exclusion number</label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    id="exclude"
                    name="exclude"
                    onKeyDown={handleOnkeyPress}
                  />
                </div>
                <div className="reserved-box">
                  {excludeArr.map((v) => {
                    return (
                      <div key={v.id} id={v.id} className="reserved-value" onClick={handleOnClickRemoveExcludeArr}>
                        {v.value}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link to={'/ResultLotto'} onClick={onClickReceive}>
              <div className="submit-container">
                <div className="submit-input">Receive</div>
              </div>
            </Link>
          </div>
        </div>
      </MobileView>
    </div>
  );
};

export default PlayLotto;
