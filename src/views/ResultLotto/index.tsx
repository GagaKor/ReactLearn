import './styles.scss';
import { MdOutlineDoubleArrow, MdHome } from 'react-icons/md';
import { BiRefresh } from 'react-icons/bi';
import api from '../../utils/api';
import { useAppDispatch, useAppSelector } from '../../store/config';
import { MouseEvent, useEffect, useState } from 'react';
import { setGame } from '../../store/slices/gameSlice';
import { useNavigate } from 'react-router-dom';
const ResultLotto = () => {
  const navigate = useNavigate();
  const disPatch = useAppDispatch();

  const { game } = useAppSelector((state) => state.game);
  const { playGame, include, exclude, deviation } = game;

  type ResultLotto = {
    id: string;
    value: number[];
  };
  const [resultLotto, setResultLotto] = useState<ResultLotto[]>([]);

  const fetchData = async () => {
    const res = await api.post('/lotto', {
      playGame,
      include,
      exclude,
      deviation,
    });
    const data = res.data.map((v: number[]) => {
      const randomStr = Math.random().toString(36).substring(2, 6);
      return { id: randomStr, value: v };
    });

    setResultLotto(data);
  };

  useEffect(() => {
    fetchData();
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

  const handleOnclickRefresh = async (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    const res = await api.post('/lotto', {
      playGame: 1,
      include,
      exclude,
      deviation,
    });
    const refresh = resultLotto.slice();
    const idx = resultLotto.findIndex((v) => v.id === id);
    const newData = {
      id,
      value: res.data[0],
    };
    refresh.splice(idx, 1, newData);
    setResultLotto(refresh);
  };

  return (
    <div className="result-lotto__container">
      <div className="homeBtnWrap" onClick={handleClickHome}>
        <MdHome size={25} color={'#5b6860'} />
      </div>
      <div className="win-section">
        <p className="win-section__title">Recommended Number</p>
        {resultLotto.map((v, idx) => {
          return (
            <div className="win-section__content" key={v.id} id={v.id}>
              <div className="win-section__content__list">
                <div className="win-number__idx__box">{idx + 1}</div>
                <div className="win-number__arrow__box">
                  <MdOutlineDoubleArrow />
                </div>

                <div className="win-number__box">
                  <span className="win-number win-number--one">{v.value[0]}</span>
                  <span className="win-number win-number--two">{v.value[1]}</span>
                  <span className="win-number win-number--three">{v.value[2]}</span>
                  <span className="win-number win-number--four">{v.value[3]}</span>
                  <span className="win-number win-number--five">{v.value[4]}</span>
                  <span className="win-number win-number--six">{v.value[5]}</span>
                </div>
                <div className="win-number__refresh__box" id={v.id} onClick={handleOnclickRefresh}>
                  <BiRefresh />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="submit-container" onClick={() => navigate(-1)}>
        <input className="submit-input" type="submit" value="Back" />
      </div>
    </div>
  );
};

export default ResultLotto;
