import styled from "styled-components";
// Section
export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

// Login area
export const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
`;
export const Article = styled.article`
  margin: 32px auto 0;
  padding: 0 0 32px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const LoginImage = styled.div`
  height: 581.15px;
  flex-basis: 380.32px;
  background-image: url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk);
  background-position: -46px 0;
  background-size: 468.32px 634.15px;
`;
export const LoginContainer = styled.div`
  margin-top: 12px;
  display: flex;
  max-width: 350px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export const LoginTop = styled.div`
  border: 1px solid var(--bc-gray);
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginTitle = styled.div`
  margin: 36px 0 12px;
  background-image: url("https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png");
  background-position: 0px -52px;
  background-size: auto;
  width: 175px;
  height: 51px;
  background-repeat: no-repeat;
  display: inline-block;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 40px 0;
`;

export const LoginInput = styled.input`
  margin-bottom: 6px;
  padding: 9px 0 7px 8px;
  background-color: #fafafa;
  border: 1px solid var(--bc-gray);
`;

export const LoginBtn = styled.button`
  margin: 8px 0;
  padding: 7px 16px;
  background-color: #4cb5f9;
  border: 0;
  border-radius: 8px;
  font-size: 1.4rem;
  color: #fff;
`;

export const LoginLine = styled.div`
  margin: 10px 0 18px;
  display: flex;
  align-items: center;
`;

export const LoginFacebook = styled.div`
  margin: 8px 40px;
`;

// Footer area
export const Footer = styled.footer`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
`;
