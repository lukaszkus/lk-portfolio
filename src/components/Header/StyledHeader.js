import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint, images } from "../../utils";

export const Container = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const TitleWrapper = styled.div`
  position: relative;
  padding-top: 6rem;

  @media ${breakpoint.tablet} {
    padding-top: 4rem;
  }
`;

export const Image = styled(motion.img).attrs({
  src: `${images.me}`,
})`
  width: 65%;
  height: auto;
  position: absolute;
  top: -50px;
  right: 0;

  @media ${breakpoint.tablet} {
    width: 50%;
    top: -90px;
    right: -30px;
  }

  @media ${breakpoint.desktopXL} {
    top: -120px;
    right: -50px;
`;

export const Title = styled(motion.h1)`
  position: relative;
  font-size: 3.5rem;
  line-height: 1;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:last-of-type {
    margin-bottom: 5px;
  }

  @media ${breakpoint.tablet} {
    font-size: 4.5rem;

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

export const Arrow = styled.img.attrs({
  src: `${images.arrow}`,
})`
  position: absolute;
  bottom: 30px;
  left: calc(50% - (30px / 2));
  width: 30px;
  transition: 0.3s ease-in-out;
  z-indx: 9999;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
