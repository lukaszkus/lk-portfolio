import { useContext } from "react";
import Context from "../../context/context";
import { NavLink as Link } from "react-router-dom";

import { Wrapper, Content } from "./Menu.style";

function Menu() {
  const { setIsMenuOpen } = useContext(Context);

  const slide = {
    initial: { x: "100%", opacity: 0 },
    slideIn: {
      x: 0,
      opacity: 1,
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <Wrapper onClick={setIsMenuOpen}>
      <Content variants={slide} initial="initial" animate="slideIn">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="work">Work</Link>
          </li>
          <li>
            <Link to="about">About me</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <div
          className="line"
          initial={{ scaleX: 0 }}
          whileInView={{
            scaleX: 1,
            transition: {
              ease: "easeInOut",
              delay: 0.4,
              duration: 0.4,
            },
          }}
          exit={{ scaleX: 0 }}
          viewport={{ once: true }}
        ></div>
        <div>
          <a href="mailto:hello.kusiu@gmail.com" className="email">
            hello.kusiu@gmail.com
          </a>
        </div>
      </Content>
    </Wrapper>
  );
}

export default Menu;
