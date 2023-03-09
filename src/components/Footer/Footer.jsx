import { Wrapper, Content, Box } from "./Footer.style";

// import { Divider } from "../";

function Footer() {
  // const date = new Date().getFullYear();

  return (
    <Wrapper>
      <Content>
        <Box>
          <p>&copy; Łukasz Kuś</p>
        </Box>
        <Box>
          <a href="#github">Github</a>
          <a href="#linkedin">Linkedin</a>
        </Box>
      </Content>
    </Wrapper>
  );
}

export default Footer;
