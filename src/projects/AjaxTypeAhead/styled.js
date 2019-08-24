import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:300,400&display=swap');

  body {
    font-family: Verdana,Geneva,sans-serif!important;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  padding: 5px;
  background: #ff742b;

  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  width: 70px;
`;

export const Img = styled.img`
  vertical-align: middle;
`;

export const Section = styled.section`
  padding-top: 10px;
  margin-top: 60px;
  font-size: 13px;
  background: #f6f6ef;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 0 15px;
  line-height: 25px;
  height: 42px;
  color: #5c5c5c;
  border: none;
  font-weight: 100;
  flex: 1 1;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.24);
  }
`;
