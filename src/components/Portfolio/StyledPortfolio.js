import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled(motion.section)`
  padding: 2rem 2rem;
  overflow: hidden;
  margin-bottom: 2rem;
  position: relative;
  margin: 3rem 0;

  @media ${breakpoint.tablet} {
    padding: 2rem 4rem;
  }

  @media ${breakpoint.desktop} {
    margin-top: 5rem;
    padding: 2rem 6rem;
  }

  @media ${breakpoint.desktopXL} {
    padding: 2rem 8rem;
  }
`;

export const Container = styled(motion.div)`
  display: grid;
  gap: 2rem;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media ${breakpoint.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BoxContainer = styled(motion.div)`
  &:hover {
    opacity: 0.95;
    z-index: 9;
  }
`;

export const Box = styled.article`
  display: flex;
  justify-content: center;
  object-fit: cover;
  max-height: 50vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
  background: ${(props) => props.bgColor};
`;

export const BoxImg = styled.img`
  width: 100%;
  height: auto;
`;

export const BoxOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background: ${(props) => props.overlayColor};

  &:hover {
    opacity: 1;
  }
`;

export const BoxText = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.2rem;
`;

export const BoxTitle = styled.h2`
  padding: 5px;
`;

export const BoxCat = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
`;
