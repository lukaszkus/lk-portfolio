import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint, images } from "../../utils";

export const Container = styled.header`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoint.tablet} {
    flex-direction: row-reverse;
  }
`;

export const TitleWrapper = styled.div``;

export const Image = styled(motion.img).attrs({
  src: `${images.me}`,
})`
  width: 50%;
  height: 100%;
  position: relative;
  rotate: 9deg;
  z-index: -999;

  @media ${breakpoint.tablet} {
    width: 20%;
  }
`;

export const Title = styled(motion.h1)`
  position: relative;
  font-size: 3.5rem;
  line-height: 1;
  color: #2575fc;

  &:last-of-type {
    margin-bottom: 5px;
  }

  @media ${breakpoint.tablet} {
    font-size: 5rem;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  @media ${breakpoint.desktopXL} {
    font-size: 6.5rem;
  }
`;

export const SubtitleWrapper = styled.div`
  position: relative;
`;

export const Subtitle = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;

  &:first-child {
    background-image: linear-gradient(
      to right,
      #b8cbb8 0%,
      #b8cbb8 0%,
      #b465da 0%,
      #cf6cc9 33%,
      #ee609c 66%,
      #ee609c 100%
    );
  }

  &:last-child {
    background-image: linear-gradient(to right, #209cff 0%, #68e0cf 100%);
    margin-bottom: 0;
  }

  @media ${breakpoint.tablet} {
    font-size: 3rem;
  }

  @media ${breakpoint.desktopXL} {
    font-size: 4rem;
  }
`;

export const BtnWrapper = styled(motion.div)`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
`;
