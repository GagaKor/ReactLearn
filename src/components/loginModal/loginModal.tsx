import './loginModal.scss';
import { ChangeEvent } from 'react';
import { useCallback } from 'react';

const LoginModal = (props: any) => {
  const { open, close, loginInfo, setLoginInfo, submitLoginData } = props;

  const handleLoginInfo = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setLoginInfo({
        ...loginInfo,
        [name]: value,
      });
    },
    [loginInfo],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitLoginData();
    }
  };

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            Login
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
                <input type="text" name="id" value={loginInfo.id} onChange={handleLoginInfo} enterKeyHint="next" />
              </div>
            </div>
            <div className="login-box">
              <div className="login-name">
                <span>Password</span>
              </div>
              <div className="login-form">
                <input
                  type="password"
                  name="password"
                  value={loginInfo.password}
                  onChange={handleLoginInfo}
                  onKeyDown={handleKeyDown}
                  enterKeyHint="send"
                />
              </div>
            </div>
          </main>
          <footer>
            <button className="login" onClick={() => submitLoginData()}>
              login
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

export default LoginModal;
