import { useContext } from "react";
import Context from "./context/context";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; //if there are bugs, import from "framer-motion/dist/framer-motion"

import { GlobalStyle } from "./style/GlobalStyle";
import { ScrollToTop } from "./utils";

//Pages
import { About, Home, Contact } from "./pages";
//Components
import {
  // Footer,
  Menu,
  ScrollBtn,
  Topbar,
} from "./components";

//Work
import {
  FrontendMentor,
  Informatyk,
  TopAlbums,
  TodoApp,
  WildnSlow,
  InspirationWay,
} from "./work";

function App() {
  const { isOpen } = useContext(Context);
  const location = useLocation();

  let titlePrefix = `${location.pathname.replace("/", "")} | `;

  const titleSuffix = `ŁK - I design and develop webpages & applications`;

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      {isOpen && <Menu />}
      <Topbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home titleSuffix={titleSuffix} />} />
          {/* <Route
            path="work"
            element={
              <Work titlePrefix={titlePrefix} titleSuffix={titleSuffix} />
            }
          /> */}
          <Route
            path="about"
            element={
              <About titlePrefix={titlePrefix} titleSuffix={titleSuffix} />
            }
          />
          <Route
            path="contact"
            element={
              <Contact titlePrefix={titlePrefix} titleSuffix={titleSuffix} />
            }
          />
          <Route
            path="work/inspiration-way"
            element={<InspirationWay id={6} />}
          />
          <Route path="work/top-albums" element={<TopAlbums id={5} />} />
          <Route path="work/todo-app" element={<TodoApp id={4} />} />
          <Route path="work/wild-n-slow" element={<WildnSlow id={3} />} />
          <Route path="work/fm-solutions" element={<FrontendMentor id={2} />} />
          <Route
            path="work/informatyk-na-godziny"
            element={<Informatyk id={1} />}
          />
        </Routes>
      </AnimatePresence>
      <ScrollBtn />
      {/* <Footer /> */}
    </>
  );
}

export default App;
