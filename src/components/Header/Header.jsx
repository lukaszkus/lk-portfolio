import { Link } from "react-scroll";

import {
  Arrow,
  Container,
  Wrapper,
  TitleWrapper,
  Image,
  Title,
  SubtitleWrapper,
  Subtitle,
} from "./StyledHeader";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          alt="Me"
          initial={{
            x: 300,
            rotate: -45,
            opacity: 0,
          }}
          animate={{
            x: 0,
            rotate: 0,
            opacity: 0.8,
          }}
          transition={{ delay: 0.2, ...transition }}
        />
        <TitleWrapper>
          <Title
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.2, ...transition }}>
            Hi,
          </Title>
          <Title
            animate={{ x: [-150, 0], opacity: [0, 1] }}
            transition={{ delay: 0.3, ...transition }}>
            I'm Łukasz
          </Title>
          <SubtitleWrapper>
            <Subtitle
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ delay: 1, ...transition }}>
              FRONT-END DEVELOPER
            </Subtitle>
            <Subtitle
              animate={{ x: [-150, 0], opacity: [0, 1] }}
              transition={{ delay: 1.1, ...transition }}>
              & GRAPHIC DESIGNER
            </Subtitle>
          </SubtitleWrapper>
        </TitleWrapper>
      </Wrapper>

      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-100}
        duration={800}>
        <Arrow
          initial={{ y: -75, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 3,
            ...transition,
          }}
        />
      </Link>
    </Container>
  );
};

export default Header;
