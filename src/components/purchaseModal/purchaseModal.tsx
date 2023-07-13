import './purchaseModal.scss';
import { ChangeEvent } from 'react';
import { useCallback } from 'react';

const PurcahseModal = (props: any) => {
  const { open, close, purchaseInfo, setpurchasInfo, submitPurchaseData } = props;

  const handlePurchaseInfo = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setpurchasInfo({
        ...purchaseInfo,
        [name]: value,
      });
    },
    [purchaseInfo],
  );

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            Puchase Info
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div className="login-box">
              <div>
                <span className="login-name">ID</span>
              </div>
              <div className="login-form">
                <input
                  type="text"
                  name="lottoId"
                  value={purchaseInfo.lottoId}
                  onChange={handlePurchaseInfo}
                  enterKeyHint="next"
                />
              </div>
            </div>
            <div className="login-box">
              <div className="login-name">
                <span>Password</span>
              </div>
              <div className="login-form">
                <input
                  type="password"
                  name="lottoPw"
                  value={purchaseInfo.lottoPw}
                  onChange={handlePurchaseInfo}
                  enterKeyHint="send"
                />
              </div>
            </div>
          </main>
          <footer>
            <button className="login" onClick={() => submitPurchaseData()}>
              Purchase
            </button>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default PurcahseModal;
