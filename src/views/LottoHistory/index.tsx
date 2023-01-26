import './styles.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LottoHisotry = () => {
  const [testArr, setTest] = useState<number[][]>([
    [1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7],
  ]);

  return (
    <div className="lottoHistory-container">
      <div className="lottoHistory-title">Lotto History</div>
      <div className="lottoHistory-select-box">
        <select className="lottoHistory-select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="lottoHistory-box">
        {testArr && testArr.length > 0 ? (
          testArr.map((num, idx) => {
            return (
              <div key={idx}>
                {num.map((v, idx2) => {
                  return <span key={idx2}>{v}</span>;
                })}
              </div>
            );
          })
        ) : (
          <span>데이터가 없습니다.</span>
        )}
      </div>
      <Link to={'/'} className="text-decoration-none">
        <div className="submit-container">Home</div>
      </Link>
    </div>
  );
};

export default LottoHisotry;
