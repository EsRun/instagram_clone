import {
  Section,
  Main,
  Article,
  LoginImage,
  LoginContainer,
  LoginBox,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginBtn,
  Footer,
} from "../../style/auth/LoginStyle";

const Login = () => {
  return (
    <>
      <Section>
        <Main>
          <Article>
            <LoginImage>Login Images</LoginImage>
            <LoginContainer>
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
              </LoginForm>
            </LoginContainer>
          </Article>
        </Main>
        <Footer />
      </Section>
    </>
  );
};

export default Login;
