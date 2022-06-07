import {
  Container,
  TitleWrapper,
  Image,
  Title,
  SubtitleWrapper,
  Subtitle,
} from "./StyledHeader";

const Header = () => {
  return (
    <Container>
      <TitleWrapper>
        <Image
          alt="Me"
          animate={{ y: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
        />
        <Title
          animate={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          Hi,
        </Title>
        <Title
          animate={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          I'm Kusiu.
        </Title>
        <SubtitleWrapper>
          <Subtitle
            animate={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ delay: 1.6, duration: 0.4 }}
          >
            FRONT-END DEVELOPER
          </Subtitle>
          <Subtitle
            animate={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ delay: 1.8, duration: 0.4 }}
          >
            & GRAPHIC DESIGNER
          </Subtitle>
        </SubtitleWrapper>
      </TitleWrapper>
    </Container>
  );
};

export default Header;
