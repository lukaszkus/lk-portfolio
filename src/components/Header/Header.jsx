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
        <Image src={images.me} alt="Me" />
        <Title>
          Hi,
          <br />
          I'm Kusiu.
        </Title>
        <SubtitleWrapper>
          <Subtitle>FRONT-END DEVELOPER</Subtitle>
          <Subtitle>& GRAPHIC DESIGNER</Subtitle>
        </SubtitleWrapper>
      </TitleWrapper>
    </Container>
  );
}

export default Header;
