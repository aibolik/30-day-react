import React from "react";
import {
  GlobalStyles,
  Header,
  LogoWrapper,
  Img,
  Input,
  Section
} from "./styled";
import { Normalize } from "styled-normalize";

import Logo from "./assets/logo-hn-search.webp";

function App() {
  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <div>
        <Header>
          <LogoWrapper>
            <Img src={Logo} width="48" height="48" />
          </LogoWrapper>
          <Input placeholder="Search stories by title, url or author" />
        </Header>
        <Section />
      </div>
    </div>
  );
}

export default App;
