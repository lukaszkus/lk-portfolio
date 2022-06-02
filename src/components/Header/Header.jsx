import { images } from "../../utils";

import {
  Container,
  TitleWrapper,
  Image,
  Title,
  SubtitleWrapper,
  Subtitle,
} from "./StyledHeader";

function Header() {
  return (
    <Container>
      <TitleWrapper>
        <Image
          src={images.me}
          alt="Me"
          animate={{ y: [-200, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
        />
        <Title
          animate={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          Hi,
          <br />
          I'm Kusiu.
        </Title>
        <SubtitleWrapper>
          <Subtitle
            animate={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            FRONT-END DEVELOPER
          </Subtitle>
          <Subtitle
            animate={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            & GRAPHIC DESIGNER
          </Subtitle>
        </SubtitleWrapper>
      </TitleWrapper>
    </Container>
  );
}

export default Header;
