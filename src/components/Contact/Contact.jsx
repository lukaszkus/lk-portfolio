import {
  Container,
  Box,
  Image,
  Title,
  Text,
  TextWrapper,
  Link,
} from "./StyledContact";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Contact() {
  return (
    <Container>
      <Box>
        <Image
          alt="Contact Me"
          initial={{
            x: -300,
            rotate: 45,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            rotate: 0,
            opacity: 0.8,
            transition: transition,
          }}
          viewport={{ once: true }}
        />
        <TextWrapper
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: transition,
          }}
          viewport={{ once: true }}>
          <Title>Get in Touch</Title>
          <Text>I’m open to job and project opportunities.</Text>
          <Link mail="mailto:lukasz.kus84@outlook.com">Drop me a line.</Link>
        </TextWrapper>
      </Box>
    </Container>
  );
}

export default Contact;
