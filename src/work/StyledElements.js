import styled from "styled-components";
import { motion } from "framer-motion";

import { images, breakpoint, COLORS } from "../utils";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media ${breakpoint.desktopXL} {
    max-width: 1280px;
  }
`;

export const Hero = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: ${(props) => props.bgColor};
`;

export const HeroImg = styled(motion.img).attrs((props) => ({
  src: props.cover,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  transform: translateY(${(props) => props.offset / 4}px);
`;

export const Arrow = styled.img.attrs({
  src: `${images.arrow}`,
})`
  position: absolute;
  bottom: 30px;
  left: calc(50% - (30px / 2));
  width: 30px;
  transition: 0.3s ease-in-out;
  z-index: 9999;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Section = styled.section.attrs((props) => ({
  id: props.id,
}))`
  padding: 4rem 2rem;
  background-image: ${(props) => (props.bgColor ? props.bgColor : null)};
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
`;

export const Heading = styled.div`
  h2 {
    font-size: 2rem;
    padding-bottom: 2rem;

    @media ${breakpoint.tablet} {
      font-size: 2.5rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 4rem;
    }
  }

  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    padding-bottom: 2rem;
  }
`;

export const Description = styled.div`
  line-height: 1.8;
  border-bottom: 1px solid #2575fc;
  padding-bottom: 4rem;
  div {
    p {
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 300;
      padding-bottom: 1rem;
    }
  }
`;

export const List = styled.div`
  ul {
    list-style: none;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    padding: 1rem 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    p {
      font-weight: 400;
    }

    // a {
    //   color: ${COLORS.white};
    //   transition: 0.3s;

    //   &:hover {
    //     color: ${COLORS.accentPrimary};
    //   }
    // }
  }

  @media ${breakpoint.tablet} {
    display: flex;
    gap: 15%;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media ${breakpoint.desktop} {
    gap: 4rem;
  }
`;

export const ImageItem = styled.figure`
  display: grid;
  place-items: center;
  order: 1;

  img {
    width: 100%;
    height: auto;
  }
  figcaption {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 0;
    text-align: center;
  }

  @media ${breakpoint.tablet} {
    order: 0;
  }
`;

export const TextItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  line-height: 1.8;
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.color ? props.color : COLORS.white)};
  order: 2;

  h3 {
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 0;
  }

  ul {
    list-style: none;
    font-weight: 400;
    padding-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  li {
    font-size: 0.75rem;
    font-weight: 300;
    padding: 0.3rem 0.8rem;
    border-radius: 25px;
    background-color: ${(props) => props.bgColor};
  }

  @media ${breakpoint.tablet} {
    align-items: flex-start;
    text-align: left;
    order: 0;
  }
`;

export const Icon = styled.img.attrs((props) => ({
  src: props.icon,
  alt: props.alt,
}))`
  width: 100%;
  height: auto;
  padding-top: 1rem;

  @media ${breakpoint.tablet} {
    width: 80%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
