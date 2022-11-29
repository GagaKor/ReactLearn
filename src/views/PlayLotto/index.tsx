import './styles.scss';
import { Link } from 'react-router-dom';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { MouseEvent, ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import api from '../../utils/api';
import { useAppDispatch, useAppSelector } from '../../store/config';
import { setGame } from '../../store/slices/gameSlice';

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
            excludeArr.length < 39 &&
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

  const handleNumberOfGames = (isPlus: boolean) => {
    if (isPlus) {
      if (count < 5) setCount((prev) => prev + 1);
    } else {
      if (count > 1) setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="playLotto-container">
      <div className="win-title">
        <p>This week{`'`}s lotto</p>
      </div>

      <div className="win-number-container">
        <span className="win-number win-number--one">{lotto.lotto_number[0]}</span>
        <span className="win-number win-number--two">{lotto.lotto_number[1]}</span>
        <span className="win-number win-number--three">{lotto.lotto_number[2]}</span>
        <span className="win-number win-number--four">{lotto.lotto_number[3]}</span>
        <span className="win-number win-number--five">{lotto.lotto_number[4]}</span>
        <span className="win-number win-number--six">{lotto.lotto_number[5]}</span>
      </div>

      {/* Number of Games */}
      <div className="form-list">
        <div className="form-list__title">Number of Games</div>
        <div className="form-list__number">
          <span onClick={() => handleNumberOfGames(true)}>
            <AiFillPlusCircle />
          </span>
          <span>{count}</span>
          <span onClick={() => handleNumberOfGames(false)}>
            <AiFillMinusCircle />
          </span>
        </div>
      </div>

      {/* Deviation */}
      <div className="form-list">
        <div className="form-list__title">Deviation</div>
        <input
          type="text"
          name="deviation"
          enterKeyHint="enter"
          value={deviation}
          onChange={handleOnChange}
          className="form-list__input"
        />
      </div>

      {/* Included Number */}
      <div className="form-list">
        <div className="form-list__title">Included Number</div>
        <input
          className="form-list__input"
          type="text"
          placeholder="Enter Number"
          id="include"
          name="include"
          enterKeyHint="enter"
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

      {/* Exclusion Number */}
      <div className="form-list">
        <div className="form-list__title">Exclusion Number</div>
        <input
          className="form-list__input"
          type="text"
          placeholder="Enter Number"
          id="exclude"
          name="exclude"
          enterKeyHint="enter"
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

      <Link to={'/ResultLotto'} onClick={onClickReceive} className="text-decoration-none">
        <div className="submit-container">Receive</div>
      </Link>
    </div>
  );
};

export default PlayLotto;
