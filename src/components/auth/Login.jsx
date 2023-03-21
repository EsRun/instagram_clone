import {
  Section,
  Article,
  Footer,
  LoginContainer,
  LoginImage,
  Main,
} from "../../style/auth/LoginStyle";

const Login = () => {
  return (
    <>
      <Section>
        <Main>
          <Article>
            <LoginImage>Login Images</LoginImage>
            <LoginContainer>Login Input</LoginContainer>
          </Article>
        </Main>
      </Section>
    </>
  );
};

export default Login;
