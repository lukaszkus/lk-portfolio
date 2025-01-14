import { Wrapper, Content, Box } from "./Footer.style";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Footer() {
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
          <a href="https://github.com/lukaszkus" target="_blank" rel="noreferrer">
            Github
          </a>
          <a href="https://www.linkedin.com/in/lukasz-kus/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </Box>
      </Content>
    </Wrapper>
  );
}

export default Footer;
