import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../utils";

export const Wrapper = styled(motion.div)`
  padding-inline: 2rem;
`;

export const FullWidth = styled(motion.div)`
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }
`;

export const HeroImg = styled.div`
  width: 100%;
  max-height: 680px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media ${breakpoint.desktop} {
    margin-top: 112px;
  }

  @media ${breakpoint.desktopXL} {
    max-height: 900px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const Heading = styled.div`
  padding: 4rem 0;

  @media ${breakpoint.desktop} {
    padding: 6rem 0;
  }

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

  h2 {
    font-weight: 300;
    font-size: 0.875rem;
    /* padding-bottom: 4rem; */

    @media ${breakpoint.desktop} {
      font-size: 1rem;
    }
  }
`;

export const Description = styled.div`
  padding-bottom: 6rem;
  line-height: 1.8;

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
    padding-top: 2rem;

    li {
      display: flex;
      align-items: center;
      font-weight: 200;
      gap: 1rem;
      padding: 0.25rem 0;
    }

    p {
      font-weight: 200;
      text-decoration: underline;
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
  padding: 6rem 0;

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
