import { Routes, Route, useLocation } from "react-router-dom";

import { GlobalStyle } from "./style/GlobalStyle";

//Pages
import {
  AboutMe,
  Home,
  Contact,
  // Projects
} from "./pages";
//Components
import { Aurora, Divider, Footer, ScrollBtn, Topbar } from "./components";

//Work
import { InspirationWay, TopAlbums, Informatyk, TodoApp, FrontendMentor, TuliMamaFizjo, RichMedia } from "./work";

const App = () => {
  const location = useLocation();

  const titleSuffix = `ŁK - I design and develop websites & apps`;

  return (
    <>
      <GlobalStyle />
      {/* <CustomCursor /> */}
      <Topbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home titleSuffix={titleSuffix} />} />
        <Route path="aboutme" element={<AboutMe titlePrefix="About me | " titleSuffix={titleSuffix} />} />
        {/* <Route
            path="projects"
            element={
              <Projects titlePrefix="Projects | " titleSuffix={titleSuffix} />
            }
          /> */}
        <Route path="contact" element={<Contact titlePrefix="Contact | " titleSuffix={titleSuffix} />} />
        <Route path="work/richmedia" element={<RichMedia id={7} titlePrefix="Rich Media | " titleSuffix={titleSuffix} />} />
        <Route path="work/tulimamafizjo" element={<TuliMamaFizjo id={6} titlePrefix="TuliMamaFizjo | " titleSuffix={titleSuffix} />} />
        <Route path="work/inspiration-way" element={<InspirationWay id={5} titlePrefix="Inspiration Way | " titleSuffix={titleSuffix} />} />
        <Route path="work/top-albums" element={<TopAlbums id={4} titlePrefix="Top Albums | " titleSuffix={titleSuffix} />} />
        <Route path="work/informatyk-na-godziny" element={<Informatyk id={3} titlePrefix="Informatyk na godziny | " titleSuffix={titleSuffix} />} />
        <Route path="work/todo-app" element={<TodoApp id={2} titlePrefix="Todo App | " titleSuffix={titleSuffix} />} />
        <Route path="work/fm-solutions" element={<FrontendMentor id={1} titlePrefix="Frontend Mentor solutions | " titleSuffix={titleSuffix} />} />
      </Routes>
      <Divider />
      <Footer />
      <Aurora />
      <ScrollBtn />
    </>
  );
};

export default App;
