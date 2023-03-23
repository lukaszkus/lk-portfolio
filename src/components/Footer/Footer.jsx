import { Wrapper, Content, Box } from "./Footer.style";

// import { Divider } from "../";
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Footer() {
  // const date = new Date().getFullYear();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
        ...transition,
        delay: 0.2,
      },
    },
  };

  const box = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { ...transition } },
  };

  return (
    <Wrapper>
      <Content variants={container} initial="hidden" whileInView="show">
        <Box variants={box}>
          <p>&copy; Łukasz Kuś</p>
        </Box>
        <Box variants={box}>
          <a href="#github">Github</a>
          <a href="#linkedin">Linkedin</a>
        </Box>
      </Content>
    </Wrapper>
  );
}

export default Footer;
