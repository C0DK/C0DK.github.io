import styled from "styled-components";
import {
  backgroundColor,
  fontName,
  primaryFontColor,
  IconHoverColor,
} from "../theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainContainer = styled.div`
  background: ${backgroundColor};
  @import url("https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap");
  font-family: ${fontName};
  color: ${primaryFontColor};
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100%;
  min-height: 100vh;
`;

export const PageTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  margin: 0px 5px;
  text-align: center;
`;

export const Tag = styled.span`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  &:after {
    content: " • ";
  }
  &:last-child:after {
    content: "";
  }
`;
export const TagRow = styled.div`
  text-align: center;
  padding: 10px 0px 0px;
`;
export const TagInnerRow = styled.div`
  text-align: center;
  padding: 0px;
`;

export const IconRow = styled.div`
  text-align: center;
  padding: 20px 0px 0px;
  & > * {
    margin-left: 20px;
  }
  & > *:first-child {
    margin-left: 0px;
  }
`;

export const FAIcon = styled(FontAwesomeIcon)`
  filter: drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.5));
  &:hover {
    filter: drop-shadow(1px 4px 4px rgba(0, 0, 0, 0.8));
    color: ${IconHoverColor};
  }
`;

export const PlainA = styled.a`
  color: inherit;
  text-decoration: none;
`;
