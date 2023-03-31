import styled from "styled-components";
import { Link } from "react-router-dom";

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
  margin-right: 32px;
  margin-bottom: 12px;
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
  margin-bottom: 10px;
  padding: 10px 0;
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
  margin: 24px 40px 10px;
  display: flex;
  flex-direction: column;
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
  display: flex;
  justify-content: center;
`;

export const LoginFindPass = styled(Link)`
  margin-top: 12px;
  text-align: center;
  font-size: 1.2rem;
`;

export const SignContainer = styled.div`
  border: 1px solid var(--bc-gray);
  font-size: 1.4rem;
  > div {
    margin: 18px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const AppContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  div:first-child {
    text-align: center;
  }
  div:last-child {
    margin: 15px 0;
    a:first-child {
      margin-right: 10px;
    }
  }
`;

export const AppLink = styled(Link)`
  img {
    height: 40px;
  }
`;

// Footer area
export const Footer = styled.footer`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  color: #8e8e8e;
  select {
    color: #8e8e8e;
  }
`;

export const Ul = styled.ul`
  display: flex;
  li {
    padding: 0 1rem;
  }
`;
