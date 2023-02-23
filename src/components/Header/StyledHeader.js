import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  min-height: calc(100vh - 80px);
  margin-top: 80px;
  padding: 2rem;
  /* background: lightcoral; */

  @media ${breakpoint.desktopXL} {
    min-height: calc(100vh - 112px);
    margin-top: 112px;
    background: var(--clr-accentPrimary);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoint.tablet} {
    flex-direction: row-reverse;
  }
`;

export const Title = styled.div`
  h1 {
    position: relative;
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 1;
    padding: 0.5rem 0;

    @media ${breakpoint.tablet} {
      font-size: 2.5rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 3rem;
    }
  }

  p {
    font-weight: 200;
    font-size: 1.25rem;
    padding: 0.5rem 0;
  }
`;

export const Subtitle = styled.div`
  position: relative;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

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
    }

    @media ${breakpoint.tablet} {
      font-size: 4.25rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 6rem;
    }
  }
`;

export const BtnWrapper = styled(motion.div)`
  display: flex;
  gap: 1rem;
  padding-top: 3rem;
`;
