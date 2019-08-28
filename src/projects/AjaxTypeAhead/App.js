import React, { useState, useEffect } from "react";
import {
  GlobalStyles,
  Header,
  LogoWrapper,
  Img,
  Input,
  Section
} from "./styled";
import { Normalize } from "styled-normalize";
import Suggestions from './components/Suggestions';

import Logo from "./assets/logo-hn-search.webp";

import useFetch from '../../hooks/useFetch';
import useDebounce from '../../hooks/useDebounce';

const HN_SEARCH_API = 'http://hn.algolia.com/api/v1/search?query=';

export const SearchContext = React.createContext();

function App() {
  const [search, setSearch] = useState('');
  const deboucedSearch = useDebounce(search, 500);
  const [state, setSearchUrl] = useFetch(`${HN_SEARCH_API}${search}`);

  useEffect(() => {
    setSearchUrl(`${HN_SEARCH_API}${deboucedSearch}`);
  }, [deboucedSearch, setSearchUrl]);

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <div>
        <Header>
          <LogoWrapper>
            <Img src={Logo} width="48" height="48" />
          </LogoWrapper>
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search stories by title, url or author" />
        </Header>
        <Section>
          <SearchContext.Provider value={search}>
            <Suggestions {...state} />
          </SearchContext.Provider>
        </Section>
      </div>
    </div>
  );
}

export default App;
