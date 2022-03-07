import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

import "./style.css";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
//Components
import Topbar from "./components/Topbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";
//Work
import TodoApp from "./work/TodoApp";

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
      {isOpen && <Menu isOpen={isOpen} toggle={toggle} />}
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work/todo-app" element={<TodoApp />} />
      </Routes>
      <Footer />
      <ScrollBtn />
    </>
  );
}

export default App;
