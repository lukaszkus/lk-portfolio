import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  padding: 0 2rem;

  @media ${breakpoint.desktop} {
    padding: 4rem;
  }
`;

export const Box = styled(motion.div)`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  border-radius: 0.5rem;
`;

export const Title = styled.h2`
  position: relative;
  font-size: 2.5rem;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${breakpoint.tablet} {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  position: relative;
  font-family: "Poppins", sans-serif;
  padding-bottom: 10px;
`;

export const Link = styled.a.attrs((props) => ({
  href: props.mail,
}))`
  color: #000;
  text-align: center;
  position: relative;
  font-family: "Poppins", sans-serif;
  text-decoration: underline;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    color: #6a11cb;
  }
`;
