import './styles.scss';

const Home = () => {
  const clickProject = (url: string) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <div className="about-container">
      <div className="item introduce">
        <div className="title">Introduction</div>
        <div className="about-me">
          <div className="about-me-text">
            <div className="sub-title">About Me</div>
            <span>&#8226; 이렇게 저렇게 하고싶은거 만항요</span>
            <span>&#8226; 이렇게 저렇게 하고싶은거 만항요</span>
            <span>&#8226; 이렇게 저렇게 하고싶은거 만항요</span>
          </div>
          <div className="about-me-text">
            <div className="sub-title">Contact</div>
            <span>&#128231;email: wexdaq554@gmail.com</span>
            <span>&#128222;phone: 010-2208-9308</span>
          </div>
        </div>
      </div>
      <div className="item skill">
        <div className="title">Skills</div>
        <div className="skill-box">
          <div className="skill-text">
            <div className="sub-title">BackEnd</div>
            <div className="skill-back">
              <div className="skill-back-text">
                <span>&#8226; Node</span>
                <span>&#8226; Express</span>
                <span>&#8226; NestJs</span>
              </div>
              <div className="skill-back-text">
                <span>&#8226; Sequelize</span>
                <span>&#8226; TypeOrm</span>
                <span>&#8226; Mysql/MariaDB</span>
              </div>
            </div>
          </div>
          <div className="skill-text">
            <div className="sub-title">FrontEnd</div>
            <div className="skill-front">
              <div className="skill-front-text">
                <span>&#8226; React</span>
                <span>&#8226; Vue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item career">
        <div className="title">Career</div>
        <div className="career-box">
          <div className="career-title">
            <div className="sub-title">우디</div>
            <span>“여행자 기반 생활 금융 플랫폼, 버디캐시”</span>
            <span>앱에서 환전을 예약하고 키오스크에서 외화를 수령할 수 있는 무인 환전 서비스</span>
          </div>
          <div className="career-text">
            <div className="career-subject">
              <span>&#8226; 키오스크 웹앱 개발</span>
              <span style={{ marginLeft: '15px', fontWeight: 'normal' }}>2021.08 ~</span>
            </div>
            <div className="career-content">
              <span>&#8226; Express, Electron 사용하여 Local Server 개발 </span>
              <span>&#8226; Vue, Electron 사용하여 키오스크 웹앱 개발 </span>
              <span>&#8226; Electron-Updater 활용하여 CI/CD Version 관리 </span>
              <span>&#8226; Rs232 통신 모듈 개발 </span>
              <span>
                &#8226; 키오스크 동기화 개발로 메인 API서버 및 네트워크 의존도를 낮추고 프로세스중 사용자 경험 개선
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="item project">
        <div className="title">Project</div>
        <div className="project-box">
          <button onClick={() => clickProject('https://github.com/GagaKor/nestJsLearn')}>Nest Porject</button>
          <button onClick={() => clickProject('https://github.com/GagaKor/reactLearn')}>React Project</button>
          <button onClick={() => clickProject('https://github.com/GagaKor/api-server/tree/main')}>Moim Easy</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
