import { useContext } from "react";
import Context from "./context/context";
import { Routes, Route } from "react-router-dom";
import "./style.css";

//Pages
import { Home, About } from "./pages";
//Components
import { Topbar, Menu, Footer, ScrollBtn } from "./components";
//Work
import { TodoApp, WildnSlow, FrontendMentor, Informatyk } from "./work";

function App() {
  const { isOpen } = useContext(Context);

  return (
    <>
      <ScrollBtn />
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
      <Footer />
    </>
  );
}

export default App;
