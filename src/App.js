import { useContext } from "react";
import Context from "./context/context";
import { Routes, Route } from "react-router-dom";

import "./style.css";

//Pages
import { About, Home } from "./pages";
//Components
import { Footer, Menu, ScrollBtn, Topbar } from "./components";
//Work
import { FrontendMentor, Informatyk, TodoApp, WildnSlow } from "./work";

function App() {
  const { isOpen } = useContext(Context);

  return (
    <>
      {isOpen && <Menu />}
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work/todo-app" element={<TodoApp />} />
        <Route path="work/wild-n-slow" element={<WildnSlow />} />
        <Route path="work/fm-solutions" element={<FrontendMentor />} />
        <Route path="work/informatyk-na-godziny" element={<Informatyk />} />
      </Routes>
      <ScrollBtn />
      <Footer />
    </>
  );
}

export default App;
