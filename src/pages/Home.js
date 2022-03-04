import styled from "styled-components";

import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const Main = styled.main``;

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Portfolio />
        <Contact />
      </Main>
    </>
  );
}

export default Home;
