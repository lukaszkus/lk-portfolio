import styled from "styled-components";

import { Header, Portfolio, Contact } from "../components";

const Main = styled.main``;

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Portfolio />
        <Contact />
      </Main>
      <div class="background-gradient"></div>
    </>
  );
}

export default Home;
