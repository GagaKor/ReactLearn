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
            <div className="abuout-me-text-form">
              <div>&#8226;</div>
              <div>다양한 기술 스택을 활용한 풀스택 개발 경험으로 효율적인 소프트웨어 개발을 실현할 수 있습니다.</div>
            </div>
            <div className="abuout-me-text-form">
              <div>&#8226;</div>
              <div>네트워크와 관련된 이슈를 해결하고 안정적인 서비스를 제공하는 역량을 보유하고 있습니다.</div>
            </div>
            <div className="abuout-me-text-form">
              <div>&#8226;</div>
              <div>
                프로젝트의 요구사항에 맞춰 기능 추가 및 성능 개선을 수행하여 팀의 목표 달성에 기여할 수 있습니다.
              </div>
            </div>
          </div>
          <div className="about-me-text">
            <div className="sub-title">Contact</div>
            <div className="abuout-me-contact-form">
              <div>&#128231;email</div>
              <div>wexdaq554@gmail.com</div>
            </div>
            <div className="abuout-me-contact-form">
              <div>&#128222;phone</div>
              <div>010-2208-9308</div>
            </div>
            <div className="abuout-me-contact-form">
              <div style={{ cursor: 'pointer' }} onClick={() => clickProject('https://github.com/GagaKor')}>
                &#128307;gitHub
              </div>
              <div style={{ cursor: 'pointer' }} onClick={() => clickProject('https://github.com/GagaKor')}>
                https://github.com/GagaKor
              </div>
            </div>
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
                <div className="skill-text-form">
                  <div>&#8226;</div>
                  <div>Node</div>
                </div>
                <div className="skill-text-form">
                  <div>&#8226;</div>
                  <div>Express</div>
                </div>
                <div className="skill-text-form">
                  <div>&#8226;</div>
                  <div>NestJs</div>
                </div>
              </div>
              <div className="skill-back-text">
                <div className="skill-text-form">
                  <div>&#8226;</div>
                  <div>Sequelize</div>
                </div>
                <div className="skill-text-form">
                  <div>&#8226;</div>
                  <div>TypeOrm</div>
                </div>
                <div className="skill-text-form">
                  <div>&#8226;</div>

                  <div>Mysql/MariaDB</div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-text">
            <div className="sub-title">FrontEnd</div>
            <div className="skill-front">
              <div className="skill-front-text">
                <div className="skill-text-form">
                  <div>&#8226;</div>
                  <div>React</div>
                </div>
                <div className="skill-text-form">
                  <div>&#8226;</div>
                  <div>Vue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item career">
        <div className="title">Career</div>
        <div className="career-container">
          <div className="career-title">
            <div className="sub-title">우디</div>
            <span>“여행자 기반 생활 금융 플랫폼, 버디캐시”</span>
            <span>앱에서 환전을 예약하고 키오스크에서 외화를 수령할 수 있는 무인 환전 서비스</span>
          </div>

          <div className="career-text">
            <div className="career-subject">
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>키오스크 웹앱</div>
              </div>
              <span className="sub-text">2021.11 ~</span>
              <span className="sub-text">Node Express Vue</span>
              <span className="sub-text">Electron Sequelize MariaDB</span>
            </div>
            <div className="career-content">
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>Express, Electron 사용하여 Local Server, Log 관리에 용이하게 개발</div>
              </div>
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>Vue, Electron 사용하여 키오스크 웹앱 개발</div>
              </div>
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>장비별 분산되어 있는 S/W 관리 및 배포의 편의성을 위해 통합 버전 개발</div>
              </div>
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>Electron-Updater, GitHub Relese 활용하여 CI/CD Version 관리 </div>
              </div>
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>Rs232 Socket 통신을 활용하여 H/W Control</div>
              </div>
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>키오스크 동기화 개발, 메인 API서버 및 네트워크 의존도를 낮추고 프로세스중 사용자 경험 개선</div>
              </div>
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>환전 프로세스 중 Req, Res 값을 저장하는 Log Table을 만들어 프로세스 과정 및 State를 관리</div>
              </div>
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>기획의 요구사항에 맞춰 키오스크 기능 개발</div>
              </div>
            </div>
          </div>

          <div className="career-text">
            <div className="career-subject">
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>환율 조회 API</div>
              </div>
              <span className="sub-text">2022.11</span>
              <span className="sub-text">Node TypeScript NestJs</span>
              <span className="sub-text">TypeOrm Mysql</span>
            </div>
            <div className="career-content">
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>협력사 제공용 은행 환율 및 회사 환율 제공 Rest API 개발</div>
              </div>
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>Access Token 발급하여 접근 관리</div>
              </div>
            </div>
          </div>

          <div className="career-text">
            <div className="career-subject">
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>Back Office 개발</div>
              </div>
              <span className="sub-text">2021.08 ~ 2021. 11</span>
              <span className="sub-text">Node Express Vue Mysql</span>
            </div>
            <div className="career-content">
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>예약환전 관리 프로세스 개발</div>
              </div>
              <div className="career-text-form">
                <div>&#8226;</div>
                <div>
                  기존 Row Query의 속도를 개선하고자 Query수정, 파티션 분할, Index, Covered Index를 적용하여 기존
                  Query보다 최대 2배 조회 속도 개선
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item github">
        <div className="title">Project</div>
        <div className="github-box">
          <div className="github-project-box">
            <div className="github-subject">
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>Gagakor Web</div>
              </div>
              <span>Node TypeSript NestJs React</span>
              <span>TypeOrm MariaDB</span>
              <span>Oracle Cloud Nginx</span>
              <div className="button-box">
                <button
                  style={{ backgroundColor: '#C70D2C' }}
                  onClick={() => clickProject('https://github.com/GagaKor/nestJsLearn')}
                >
                  NestJs
                </button>
                <button
                  style={{ backgroundColor: '#099DFD' }}
                  onClick={() => clickProject('https://github.com/GagaKor/reactLearn')}
                >
                  React
                </button>
              </div>
            </div>
            <div className="github-content">
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>NestJs Rest Api 기반의 백엔드 개발</div>
              </div>
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>당첨번호 조회, 추천번호 등 기능 개발</div>
              </div>
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>매회 당첨번호 업데이트 자동화</div>
              </div>
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>Oracle Cloud Ubuntu, NginX, Https 세팅 </div>
              </div>
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>Git Action CI/CD 배포</div>
              </div>
            </div>
          </div>
          <div className="github-project-box">
            <div className="github-subject">
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>Moim Easy</div>
              </div>
              <span>2022.10 ~ 2022.02</span>
              <span>Node TypeSript NestJs TypeOrm</span>
              <span>Mysql Kakao Open Api</span>
              <div className="button-box">
                <button
                  style={{ backgroundColor: '#C70D2C' }}
                  onClick={() => clickProject('https://github.com/GagaKor/api-server/tree/main')}
                >
                  NestJs
                </button>
              </div>
            </div>
            <div className="github-content">
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>Kakao Open Api를 이용한 회식장소 추천 Rest Api 구성의 백엔드 개발</div>
              </div>
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>Kakao Auth Login, JWT 회원 인증 </div>
              </div>
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>ERD 작성 기획 요구사항에 맞춰 Auth, Place, Review등의 테이블 구성</div>
              </div>
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>회식장소 CRUD 및 Transaction 데이터 부정합 방지</div>
              </div>
              <div className="github-text-form">
                <div>&#8226;</div>
                <div>리뷰 기반 통계 DB저장 및 키워드 검색기능 개발</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
