import './styles.scss';
import { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import api from './../../utils/api';

const LottoSelectList = () => {
  const [lottoArr, setLotto] = useState<number[][]>();

  const [lastRound, setLastRound] = useState<number>(0);

  const [selectRound, setSelectRound] = useState<number>();

  const [total, setTotal] = useState<number>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/lotto/select-last-round');
      const { round } = res.data;

      setLastRound(round);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (lastRound > 0) {
      const winners = async () => {
        const res = await api.get('/lotto/select-list', { params: { round: lastRound } });
        const { lotto_number, total } = res.data;
        setLotto(lotto_number);
        setTotal(total);
      };

      winners();
    }
  }, [lastRound]);

  useEffect(() => {
    if (selectRound) {
      const changeRound = async () => {
        const res = await api.get('/lotto/select-list', { params: { round: selectRound } });
        const { lotto_number, total } = res.data;

        setLotto(lotto_number);

        setTotal(total);
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

  return (
    <div className="lottoHistory-container">
      <div className="lottoHistory-title">Recommended Number History</div>
      <div className="lottoHistory-select-box">
        <select onChange={handleOnClickOptions} className="lottoHistory-select">
          {Rounds()}
        </select>
      </div>
      <div className="lottoHistory-total">{total} Games</div>
      <div className="lottoHistory-wingames-box">
        {lottoArr && lottoArr.length > 0 ? (
          lottoArr.map((num, idx) => {
            return (
              <div key={idx}>
                <span>{idx + 1}.</span>
                {num.map((v) => {
                  return <span key={v}>{v}</span>;
                })}
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

export default LottoSelectList;
