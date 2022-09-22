import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint, images } from "../../utils";

export const Container = styled.section`
  padding-inline: 2rem;

  @media ${breakpoint.desktop} {
    padding: 4rem;
  }
`;

export const Box = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media ${breakpoint.tablet} {
    flex-direction: row;
    gap: 4rem;
  }
`;

export const Image = styled(motion.img).attrs({
  src: `${images.me_call}`,
})`
  width: 50%;
  height: 100%;
  position: relative;
  rotate: -7deg;
  z-index: -999;

  @media ${breakpoint.tablet} {
    width: 20%;
  }
`;

export const TextWrapper = styled(motion.div)``;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #2575fc;

  @media ${breakpoint.tablet} {
    font-size: 4rem;
  }

  @media ${breakpoint.desktop} {
    font-size: 5rem;
  }
`;

export const Text = styled.p`
  font-family: "Poppins", sans-serif;
  padding-bottom: 1.5rem;
`;

export const Link = styled.a.attrs((props) => ({
  href: props.mail,
}))`
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-decoration: underline;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    color: #ee609c;
  }
`;
