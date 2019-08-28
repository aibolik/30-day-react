import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3px 15px 10px;
  text-align: left;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-bottom: solid 1px #eee;
`;

export const Heading = styled.h2`
  font-size: inherit;
  margin-top: 0;
  margin-bottom: 4px;
`;

export const Anchor = styled.a`
  color: #000;
  text-decoration: none;

  font-weight: 100;

  &:visited {
    color: #9c9c9c;
  }

  strong {
    font-weight: bold;
    background: #ff0;
  }
`;

export const Properties = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  white-space: nowrap;

  li {
    padding-left: 5px;
    padding-right: 3px;
    margin-right: 2px;
    border-left: 1px solid #cfcfcf;

    &:first-child {
      border-left: none;
      padding-left: 0;
    }

    a {
      font-size: 10px;
      color: dimgray;
      text-decoration: none;

      &:hover {
        border-bottom: dotted 1px #ccc;
      }
    }
  }
`;
