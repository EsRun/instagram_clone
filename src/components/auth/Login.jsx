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
  Footer,
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
                        backgroundColor: "gray",
                      }}
                    ></div>
                    <div>또는</div>
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "gray",
                      }}
                    ></div>
                  </LoginLine>
                </LoginForm>
              </LoginTop>
            </LoginContainer>
          </Article>
        </Main>
        <Footer>
          <div style={{ marginBottom: "52px" }}>
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
