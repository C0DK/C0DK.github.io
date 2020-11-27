import React from "react";
import { MainContainer, PageTitle } from "./style";
import TagLine from "./TagLine";
import LinkRow from "./LinkRow";

export default () => (
  <MainContainer>
    <Header />
    <TagLine />
    <LinkRow />
  </MainContainer>
);

const Header = () => <PageTitle>Casper Weiss Bang</PageTitle>;
