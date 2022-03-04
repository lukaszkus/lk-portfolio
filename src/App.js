import { useState, useEffect } from "react";
import AOS from "aos";

import "./style.css";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
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
      <Home />
      <Footer />
    </>
  );
}

export default App;
