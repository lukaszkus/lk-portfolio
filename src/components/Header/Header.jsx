import { Link } from "react-scroll";

import {
  Arrow,
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
          animate={{
            // y: [-100, 0],
            opacity: [0, 1],
            scale: [4, 0.9, 1.1, 1],
            // rotate: [15, 0],
          }}
          transition={{ duration: 0.6 }}
        />
        <Title
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Hi,
        </Title>
        <Title
          animate={{ x: [-150, 0], opacity: [0, 1] }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          I'm Kusiu.
        </Title>
        <SubtitleWrapper>
          <Subtitle
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            FRONT-END DEVELOPER
          </Subtitle>
          <Subtitle
            animate={{ x: [-150, 0], opacity: [0, 1] }}
            transition={{ delay: 1.1, duration: 0.4 }}
          >
            & GRAPHIC DESIGNER
          </Subtitle>
        </SubtitleWrapper>
      </TitleWrapper>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <Arrow />
      </Link>
    </Container>
  );
};

export default Header;
