import { useState, useEffect } from "react";
import AOS from "aos";

import "./style.css";
import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
