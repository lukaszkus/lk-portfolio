import { useContext } from "react";
import Context from "../../context/context";
import { Wrapper, Content, Box } from "./Footer.style";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Footer() {
  const { toggleCursor } = useContext(Context);
  // const date = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ...transition,
        delay: 0.2,
      },
    },
  };

  const box = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { ...transition } },
  };

  return (
    <Wrapper>
      <Content variants={container} initial="hidden" whileInView="show" exit="hidden">
        <Box variants={box}>
          <p>&copy; Łukasz Kuś - lkus.pl</p>
        </Box>
        <Box variants={box}>
          <a href="https://github.com/lukaszkus" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
            Github
          </a>
          <a href="https://www.linkedin.com/in/lukasz-kus/" onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
            Linkedin
          </a>
        </Box>
      </Content>
    </Wrapper>
  );
}

export default Footer;
