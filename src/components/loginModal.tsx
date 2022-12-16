import './loginModal.scss';

const LoginModal = (props: any) => {
  const { open, close } = props;
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
          <main className="board-main">
            <div className="board-main-div">
              <label>ID</label>
              <input type="text" enterKeyHint="next" />
            </div>
            <div className="board-main-div">
              <label>Password</label>
              <input type="password" enterKeyHint="send" />
            </div>
          </main>
          <footer>
            <button className="login">login</button>
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
