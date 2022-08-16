import { Container, Box, Title, Text, Link } from "./StyledContact";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Contact() {
  return (
    <Container>
      <Box
        whileInView={{
          y: [100, 0],
          opacity: [0, 1],
          transition: transition,
        }}
      >
        <Title>Get in Touch</Title>
        <Text>I’m open to job and project opportunities.</Text>
        <Link mail="mailto:lukasz.kus84@outlook.com">Drop me a line.</Link>
      </Box>
    </Container>
  );
}

export default Contact;
