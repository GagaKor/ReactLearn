import './styles.scss';
import { Link } from 'react-router-dom';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { TbArrowsHorizontal } from 'react-icons/tb';
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

  const [count, setCount] = useState(1);

  const [deviation, setDeviation] = useState<number>(0);

  const [minRange, setMinRange] = useState<number>(21);

  const [cons, setCons] = useState<string>('');

  type rangeType = {
    min: number;
    max: number;
  };

  const [range, setRange] = useState<rangeType>({
    min: 106,
    max: 170,
  });

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
    setCons(game.consecution);
    const rangeData = { max: game.max, min: game.min };
    setRange(rangeData);

    let minData = minRange;
    for (const g of game.include) {
      if (g > 6) minData += g;
    }
    setMinRange(minData);
  }, []);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    if (Number(e.target.value) < 0) e.target.value = '';

    if (e.target.name === 'deviation' && Number(e.target.value) >= 0) {
      if (Number(e.target.value) > 42) {
        e.target.value = '';
        return;
      }
      setDeviation(Number(e.target.value));
    }

    if (e.target.name === 'rangeMin') {
      const v = Number(e.target.value);
      const data: rangeType = { max: range.max, min: v };
      setRange(data);
    }
    if (e.target.name === 'rangeMax') {
      const v = Number(e.target.value);
      if (v > 255) return;
      const data: rangeType = { max: v, min: range.min };
      setRange(data);
    }
  }
  const onClickConsecution = (e: MouseEvent<HTMLElement>) => {
    setCons(e.currentTarget.id);
  };
  const handleOnkeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const targetValue = Number(e.currentTarget.value);
    const randomStr = Math.random().toString(36).substring(2, 6);
    if (e.key === 'Enter' && targetValue > 0 && targetValue < 46) {
      if (
        e.currentTarget.id === 'include' &&
        includeArr.length < 6 &&
        includeArr.filter((v) => v.value === targetValue).length < 1 &&
        excludeArr.filter((v) => v.value === targetValue).length < 1
      ) {
        const data: InExclude = {
          id: randomStr,
          value: targetValue,
        };
        if (targetValue > 6) {
          const minData = minRange + targetValue;
          setMinRange(minData);
        }

        const newArr = [...includeArr, data];
        newArr.sort((a, b) => a.value - b.value);
        setIncludeArr(newArr);
      }
      if (
        e.currentTarget.id === 'exclude' &&
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

      e.currentTarget.value = '';
      e.preventDefault();
    }
  };

  const handleOnClickRemoveIncludeArr = (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    const removeData = includeArr.find((v) => v.id === id);
    if (removeData && removeData.value > 6) {
      const minData = minRange - removeData.value;
      setMinRange(minData);
    }

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
    let rangeData = range;
    if (range.min < minRange) {
      rangeData = { max: range.max, min: minRange };
    }
    if (range.max < 22) {
      rangeData.max = 22;
    }
    if (rangeData.min > rangeData.max) {
      rangeData.max = rangeData.min + 10;
    }
    const data = {
      playGame: count,
      deviation,
      include,
      exclude,
      consecution: cons,
      max: rangeData.max,
      min: rangeData.min,
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

      <div className="number-form">
        {/* Number of Games */}

        <div className="number-form-list">
          <div className="number-form__title">Number of Games</div>
          <div className="number-form__number">
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
        <div className="number-form-list">
          <div className="form-list__title">Deviation Max:42</div>
          <input
            type="text"
            name="deviation"
            enterKeyHint="enter"
            defaultValue={deviation}
            onChange={handleOnChange}
            className="number-form__input"
          />
        </div>
      </div>

      <div className="number-form">
        {/* Consecution */}
        <div className="number-form-list">
          <div className="number-form__title">Consecution</div>
          <div className="number-form__number">
            <div
              className={`number-form__check ${'on' === cons ? 'check-click' : ''}`}
              id="on"
              onClick={onClickConsecution}
            >
              Include
            </div>
            <div
              className={`number-form__check ${'off' === cons ? 'check-click' : ''}`}
              id="off"
              onClick={onClickConsecution}
            >
              exclude
            </div>
            <div
              className={`number-form__check ${'any' === cons ? 'check-click' : ''}`}
              id="any"
              onClick={onClickConsecution}
            >
              Any
            </div>
          </div>
        </div>
        {/* Range */}
        <div className="number-form-list">
          <div className="number-form__title">Range</div>
          <div className="number-form__number">
            <input
              className="number-form__range_input"
              name="rangeMin"
              type="text"
              value={range.min}
              onChange={handleOnChange}
            />
            <span>
              <TbArrowsHorizontal />
            </span>
            <input
              className="number-form__range_input"
              name="rangeMax"
              type="text"
              value={range.max}
              onChange={handleOnChange}
            />
          </div>
        </div>
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
