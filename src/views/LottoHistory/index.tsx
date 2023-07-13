import './styles.scss';
import { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import api from './../../utils/api';

type WinArr = {
  lotto_number: number[];
  cnt: number;
};

const LottoHisotry = () => {
  const [winArr, setWinArr] = useState<WinArr[]>();

  const [lastRound, setLastRound] = useState<number>(0);

  const [thisRound, setThisRound] = useState<number>(0);

  const [thisWeekWinNumber, setWeekWinNumber] = useState<number[]>([]);

  const [selectRound, setSelectRound] = useState<number>();

  const [total, setTotal] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/lotto/thisweek');
      const { round, lotto_number } = res.data[0];
      setLastRound(round);

      setWeekWinNumber(JSON.parse(lotto_number));
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (lastRound > 0) {
      const winners = async () => {
        const res = await api.get('/lotto/winner', { params: { round: lastRound } });
        const { round, win, total } = res.data;
        setThisRound(round);
        setWinArr(win);
        setTotal(total);
      };

      winners();
    }
  }, [lastRound]);

  useEffect(() => {
    if (selectRound) {
      const changeRound = async () => {
        const res = await api.get('/lotto/winner', { params: { round: selectRound } });
        const { win, round, weekWinNumber, total } = res.data;

        setWinArr(win);
        setThisRound(round);
        setTotal(total);
        setWeekWinNumber(weekWinNumber);
      };

      changeRound();
    }
  }, [selectRound]);

  const Rounds = () => {
    const tempArr = [];
    if (lastRound < 1) return null;
    for (let i = lastRound; i > 0; i--) {
      tempArr.push(
        <option key={i} value={i}>
          {i}
        </option>,
      );
    }
    return tempArr;
  };

  const handleOnClickOptions = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectRound(Number(e.target.value));
  };

  const checkGrade = (cnt: number) => {
    let grade = '';
    let rgb = '';
    switch (cnt) {
      case 3:
        grade = '5th';
        break;

      case 4:
        grade = '4th';
        rgb = 'rgb(178,102,255)';
        break;

      case 5:
        grade = '3rd';
        rgb = 'rgb(196,156,72)';
        break;

      case 6:
        grade = '1st';
        rgb = 'rgb(255,215,0)';
        break;
      default:
        grade = '6th';
    }
    return { grade, rgb };
  };

  return (
    <div className="lottoHistory-container">
      <div className="lottoHistory-title">Lotto History &#39;{thisRound}&#39;</div>
      <div className="lottoHistory-select-box">
        <select onChange={handleOnClickOptions} className="lottoHistory-select">
          {Rounds()}
        </select>
      </div>
      <div style={{ fontSize: '20px' }}>This&#39;s Week WinNumbers</div>
      <div className="lottoHistory-winnumber-box">
        <div>
          {thisWeekWinNumber?.map((v) => {
            return <span key={v}>{v}</span>;
          })}
        </div>
      </div>
      <div style={{ fontSize: '20px' }}>Win Games</div>
      <div className="lottoHistory-total">
        {winArr?.length} out of {total} Games
      </div>
      <div className="lottoHistory-wingames-box">
        {winArr && winArr.length > 0 ? (
          winArr.map((num, idx) => {
            return (
              <div key={idx}>
                <span>{idx + 1}.</span>
                {num.lotto_number.map((v) => {
                  return (
                    <span
                      key={v}
                      style={!thisWeekWinNumber.includes(v) ? { background: 'rgba(142, 149, 152, 0.3)' } : {}}
                    >
                      {v}
                    </span>
                  );
                })}
                <span style={{ background: checkGrade(num.cnt).rgb }}>{checkGrade(num.cnt).grade}</span>
              </div>
            );
          })
        ) : (
          <div>데이터가 없습니다.</div>
        )}
      </div>
      <Link to={'/'} className="text-decoration-none">
        <div className="submit-container">Home</div>
      </Link>
    </div>
  );
};

export default LottoHisotry;
