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
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollBtn from "./components/ScrollBtn";
//Work
import TodoApp from "./work/TodoApp";
import WildnSlow from "./work/WildnSlow";
import FrontendMentor from "./work/FrontendMentor";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  //Animate On Scroll
  useEffect(() => {
    AOS.init();
  }, []);

  //Menu toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //Parallax effect
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <>
      <ScrollBtn />
      {isOpen && <Menu isOpen={isOpen} toggle={toggle} />}
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work/todo-app" element={<TodoApp offset={offset} />} />
        <Route
          path="work/wild-n-slow"
          element={<WildnSlow offset={offset} />}
        />
        <Route
          path="work/fm-solutions"
          element={<FrontendMentor offset={offset} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
