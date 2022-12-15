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
          <main>{props.children}</main>
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
