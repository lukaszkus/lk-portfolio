import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../utils";

export const Wrapper = styled(motion.div)`
  padding-inline: 2rem;
`;

export const Container = styled.div`
  max-width: var(--maxWidth);

  margin: 0 auto;

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }
`;

export const Hero = styled.div`
  width: 100%;
  /* max-height: 540px; */
  max-height: 768px;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  border-radius: 0;
  /* transition: 0.3s ease-in-out; */

  @media (min-width: 1400px) {
    /* border-radius: 1.75rem; */
  }

  @media ${breakpoint.desktop} {
    margin-top: 112px;
  }

  @media ${breakpoint.desktopXL} {
    /* max-height: 768px; */
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const Heading = styled.div`
  /* max-width: 75%; */
  padding: 4rem 0;

  h1 {
    font-size: 1.75rem;
    padding-bottom: 1rem;
    font-weight: 500;

    @media ${breakpoint.tablet} {
      font-size: 2.75rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 3.5rem;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 0.875rem;
    /* padding-bottom: 4rem; */

    @media ${breakpoint.desktop} {
      font-size: 1rem;
    }
  }
`;

export const Description = styled.div`
  line-height: 1.8;
  border-bottom: 1px solid #2575fc;

  div {
    p {
      font-size: 0.875rem;
      font-weight: 200;
      padding-bottom: 1rem;

      @media ${breakpoint.tablet} {
        font-size: 1rem;
      }
    }
  }
`;

export const List = styled.div`
  font-size: 0.875rem;

  ul {
    list-style: none;
    font-weight: 300;
    padding: 2rem 0;

    li {
      display: flex;
      align-items: center;
      font-weight: 200;
      gap: 1rem;
      padding: 0.25rem 0;
    }

    p {
      font-weight: 200;
    }
  }

  @media ${breakpoint.tablet} {
    display: flex;
    flex-wrap: wrap;
    gap: 10%;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 4rem 0;

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
  /* place-items: center; */
  order: 1;

  img {
    width: 100%;
    height: auto;
  }
  figcaption {
    font-size: 0.875rem;
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
  color: var(--clr-light);
  order: 2;

  h3 {
    font-weight: 200;
  }

  p {
    font-size: 0.875rem;
    font-weight: 200;
    padding: 1rem 0;
  }

  ul {
    list-style: none;
    font-weight: 200;
    padding-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  li {
    font-size: 0.75rem;
    font-weight: 200;
    padding: 0.3rem 0.8rem;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.1);
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
