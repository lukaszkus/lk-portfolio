import { useContext } from "react";
import Context from "./context/context";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; //if there are bugs, import from "framer-motion/dist/framer-motion"

import "./style.css";

//Pages
import { About, Home } from "./pages";
//Components
import { Footer, Menu, ScrollBtn, Topbar } from "./components";
//Work
import {
  FrontendMentor,
  Informatyk,
  TopAlbums,
  TodoApp,
  WildnSlow,
} from "./work";

function App() {
  const { isOpen } = useContext(Context);

  const location = useLocation();
  return (
    <>
      {isOpen && <Menu />}
      <Topbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work/top-albums" element={<TopAlbums />} />
          <Route path="work/todo-app" element={<TodoApp />} />
          <Route path="work/wild-n-slow" element={<WildnSlow />} />
          <Route path="work/fm-solutions" element={<FrontendMentor />} />
          <Route path="work/informatyk-na-godziny" element={<Informatyk />} />
        </Routes>
      </AnimatePresence>
      <ScrollBtn />
      <Footer />
      <div className="background-animate"></div>
      <div className="background-gradient"></div>
    </>
  );
}

export default App;
