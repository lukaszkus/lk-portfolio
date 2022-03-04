import { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

import "./style.css";
import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Main = styled.main``;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      {isOpen && <Menu isOpen={isOpen} toggle={toggle} />}
      <Header />
      <Main>
        <Portfolio />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}

export default App;
