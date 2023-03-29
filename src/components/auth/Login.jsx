import {
  Section,
  Main,
  Article,
  LoginImage,
  LoginContainer,
  LoginTop,
  LoginBox,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginBtn,
  LoginLine,
  LoginFacebook,
  LoginFindPass,
  SignContainer,
  AppContainer,
  Footer,
  AppLink,
} from "../../style/auth/LoginStyle";

const Login = () => {
  return (
    <>
      <Section>
        <Main>
          <Article>
            <LoginImage />
            <LoginContainer>
              <LoginTop>
                <LoginBox>
                  <LoginTitle
                    data-visualcompletion="css-img"
                    aria-label="Instagram"
                    role="img"
                  />
                </LoginBox>
                <LoginForm>
                  <LoginInput placeholder="전화번호, 사용자 이름 또는 이메일" />
                  <LoginInput placeholder="비밀번호" />
                  <LoginBtn>로그인</LoginBtn>
                  <LoginLine>
                    <div
                      style={{
                        height: "1px",
                        flexGrow: "1",
                        backgroundColor: "#dbdbdb",
                      }}
                    ></div>
                    <div
                      style={{
                        margin: "0 18px",
                        fontSize: "1.3rem",
                      }}
                    >
                      또는
                    </div>
                    <div
                      style={{
                        height: "1px",
                        flexGrow: "1",
                        backgroundColor: "#dbdbdb",
                      }}
                    ></div>
                  </LoginLine>
                  <LoginFacebook>
                    <button
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: "0",
                        background: "none",
                      }}
                    >
                      <span
                        style={{
                          marginRight: "8px",
                          display: "inline-block",
                          height: "16px",
                          width: "16px",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "-414px -259px",
                          backgroundImage: `url(
                            "https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png"
                          )`,
                        }}
                      ></span>
                      <span style={{}}>Facebook으로 로그인</span>
                    </button>
                  </LoginFacebook>
                  <LoginFindPass>비밀번호를 잊으셨나요?</LoginFindPass>
                </LoginForm>
              </LoginTop>
              <SignContainer>
                <div>
                  <p>계정이 없으신가요?</p>
                  <a>가입하기</a>
                </div>
              </SignContainer>
              <AppContainer>
                <div>
                  <p>앱을 다운로드하세요.</p>
                </div>
                <div>
                  <AppLink
                    to={
                      "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9A60607F-D1D8-4F1B-9D79-72FEC517F519%26utm_content%3Dlo%26utm_medium%3Dbadge"
                    }
                  >
                    <img
                      src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"
                      alt="google"
                    />
                  </AppLink>
                  <AppLink
                    to={
                      "ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1040"
                    }
                  >
                    <img
                      src="https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png"
                      alt="microsoft"
                    />
                  </AppLink>
                </div>
              </AppContainer>
            </LoginContainer>
          </Article>
        </Main>
        <Footer>
          <div style={{ marginBottom: "52px", color: "#8e8e8e" }}>
            <div>
              <ul style={{ display: "flex" }}>
                <li>Meta</li>
                <li>소개</li>
                <li>블로그</li>
                <li>채용 정보</li>
                <li>도움말</li>
                <li>API</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>인기 계정</li>
                <li>위치</li>
                <li>Instagram Lite</li>
                <li>연락처 업로드 & 비사용자</li>
                <li>Meta Verified</li>
              </ul>
            </div>
            <div
              style={{
                padding: "12px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <select>
                <option>한국어</option>
              </select>
              <div>© 2023 Instagram from Meta</div>
            </div>
          </div>
        </Footer>
      </Section>
    </>
  );
};

export default Login;
