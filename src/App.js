import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; //if there are bugs, import from "framer-motion/dist/framer-motion"

import { GlobalStyle } from "./style/GlobalStyle";
import { ScrollToTop } from "./utils";

//Pages
import { About, Home, Contact } from "./pages";
//Components
import { Footer, ScrollBtn, Topbar } from "./components";

//Work
import {
  InspirationWay,
  TopAlbums,
  Informatyk,
  TodoApp,
  FrontendMentor,
} from "./work";

function App() {
  const location = useLocation();

  let titlePrefix = `${location.pathname.replace("/", "")} | `;

  const titleSuffix = `ŁK - I design and develop webpages & applications`;

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Topbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home titleSuffix={titleSuffix} />} />
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
            element={<InspirationWay id={5} />}
          />
          <Route path="work/top-albums" element={<TopAlbums id={4} />} />
          <Route
            path="work/informatyk-na-godziny"
            element={<Informatyk id={3} />}
          />
          <Route path="work/todo-app" element={<TodoApp id={2} />} />
          <Route path="work/fm-solutions" element={<FrontendMentor id={1} />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ScrollBtn />
      {/* <div className="background-gradient"></div> */}
    </>
  );
}

export default App;
