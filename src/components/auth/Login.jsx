import {
  Section,
  Main,
  Article,
  LoginImage,
  LoginContainer,
  LoginBox,
  LoginTitle,
  LoginForm,
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
                <input></input>
                <input></input>
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
