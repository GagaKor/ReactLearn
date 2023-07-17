import './styles.scss';
import { BiRefresh } from 'react-icons/bi';
import api from '../../utils/api';
import { useAppDispatch, useAppSelector } from '../../store/config';
import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setLotto } from '../../store/slices/lottoSlice';
import LoginModal from '../../components/loginModal/loginModal';
import PurcahseModal from '../../components/purchaseModal/purchaseModal';
import { getCookie } from '../../utils/cookie';
const ResultLotto = () => {
  const navigate = useNavigate();

  const disPatch = useAppDispatch();
  const { game } = useAppSelector((state) => state.game);
  const { playGame, include, exclude, deviation, consecution, max, min } = game;

  type ResultLotto = {
    id: string;
    value: number[];
  };
  const [resultLotto, setResultLotto] = useState<ResultLotto[]>([]);
  const [cons, setCons] = useState<string>();

  const fetchData = async () => {
    try {
      const res = await api.post('/lotto', {
        playGame,
        include,
        exclude,
        deviation,
        consecution,
        max,
        min,
      });

      disPatch(setLotto({ lotto: res.data }));

      const data = res.data.map((v: number[]) => {
        const randomStr = Math.random().toString(36).substring(2, 6);
        return { id: randomStr, value: v };
      });
      setResultLotto(data);
    } catch (err) {
      alert('Can not resolve your order');
      navigate(-1);
    }
  };

  useEffect(() => {
    fetchData();
    setCons(consecution);
  }, []);

  const handleOnclickRefresh = async (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    const res = await api.post('/lotto', {
      playGame: 1,
      include,
      exclude,
      deviation,
      consecution: cons,
      max,
      min,
    });

    const refresh = resultLotto.slice();

    const idx = resultLotto.findIndex((v) => v.id === id);
    const newData = {
      id,
      value: res.data[0],
    };
    refresh.splice(idx, 1, newData);

    setResultLotto(refresh);

    const lottoArr = refresh.map((v) => v.value);

    disPatch(setLotto({ lotto: lottoArr }));
  };

  const onClickConsecution = (e: MouseEvent<HTMLElement>) => {
    setCons(e.currentTarget.id);
  };

  //구매버튼 로그인 요청
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ id: '', password: '' });

  const submitLoginData = async () => {
    if (loginInfo.id && loginInfo.password) {
      const loginState = await handleLogin();
      setLoginModalOpen(false);

      if (loginState) {
        setPurchasOpen(true);
      } else {
        alert('Login Error');
      }
    }
  };

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { username: loginInfo.id, password: loginInfo.password });
      if (res.status === 201) return true;
    } catch (e) {
      return false;
    }
  };

  const onClickOpenPost = () => {
    setLoginModalOpen(true);
  };
  const onClickClosePost = () => {
    setLoginModalOpen(false);
  };

  //로그인 후 구매 정보 입력
  const [purchaseModalOpen, setPurchasOpen] = useState(false);
  const [purchaseInfo, setpurchasInfo] = useState({
    lottoId: '',
    lottoPw: '',
  });

  const onClickClosePurchase = () => {
    setPurchasOpen(false);
  };
  const submitPurchaseData = async () => {
    const purchaseData = { lottos: resultLotto.map((v) => v.value), ...purchaseInfo };
    const result = await purchaseLotto(purchaseData);
    console.log(result);
    alert(result.resultMsg);
    if (result.resultMsg === 'success') {
      setPurchasOpen(false);
    }
  };

  type PurchaseData = {
    lottoId: string;
    lottoPw: string;
    lottos: number[][];
  };

  const purchaseLotto = async (purchaseData: PurchaseData) => {
    try {
      const res = await api.post('/lotto/purchase-lotto', purchaseData, {
        headers: { Authorization: `Bearer ${getCookie('Authentication')}` },
      });
      return res.data;
    } catch (e) {
      return { resultMsg: 'Failed' };
    }
  };

  return (
    <div className="resultLotto-container">
      <div className="win-title">
        <p>Recommended Number</p>
      </div>
      <div className="number-form">
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
      </div>
      <div className="win-section">
        {resultLotto.map((v, idx) => (
          <div className="win-list" key={v.id} id={v.id}>
            {/* 인덱스 */}
            <div className="win-list__idx">
              {idx + 1} <span className="win-list__idx__border"></span>
            </div>

            {/* 숫자들 */}
            <div className="win-list__number-container">
              <span className="win-number win-number--one">{v.value[0]}</span>
              <span className="win-number win-number--two">{v.value[1]}</span>
              <span className="win-number win-number--three">{v.value[2]}</span>
              <span className="win-number win-number--four">{v.value[3]}</span>
              <span className="win-number win-number--five">{v.value[4]}</span>
              <span className="win-number win-number--six">{v.value[5]}</span>
            </div>

            {/* 새로고침 */}
            <div id={v.id} onClick={handleOnclickRefresh}>
              <BiRefresh size={20} />
            </div>
          </div>
        ))}
      </div>

      <div className="play-lotto-btn-box">
        <div className="submit-container" onClick={() => navigate(-1)}>
          Back
        </div>
        <div className="submit-container" onClick={onClickOpenPost}>
          Purchase
        </div>
        <LoginModal
          open={loginModalOpen}
          submitLoginData={submitLoginData}
          loginInfo={loginInfo}
          setLoginInfo={setLoginInfo}
          close={onClickClosePost}
        />
        <PurcahseModal
          open={purchaseModalOpen}
          close={onClickClosePurchase}
          purchaseInfo={purchaseInfo}
          setpurchasInfo={setpurchasInfo}
          submitPurchaseData={submitPurchaseData}
        ></PurcahseModal>
      </div>
    </div>
  );
};

export default ResultLotto;
