import { useState, useEffect } from "react";
import AOS from "aos";

import "./style.css";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Menu from "./components/Menu";

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
      <Portfolio />
    </>
  );
}

export default App;
