import styled from "styled-components";
import { motion } from "framer-motion";

import IMAGES from "../../utils/images";
import { breakpoint } from "../../utils";

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 165px;
  height: 240px;

  @media ${breakpoint.tablet} {
    width: 248px;
    height: 360px;
  }

  @media ${breakpoint.desktop} {
    width: 330px;
    height: 480px;
  }

  @media ${breakpoint.desktopXL} {
    width: 372px;
    height: 540px;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  mask-size: 100% 100%;
  mask-position: center;
  mask-image: url(${IMAGES.me_mask});
  opacity: 0.5;
`;

export const Image = styled.img`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Emoji = styled.div`
  position: absolute;
  top: 15%;
  right: -10%;
  z-index: 3;

  span {
    display: block;
    font-size: 1.5rem;
    text-shadow: -15px 25px 20px rgba(0, 0, 0, 0.2);

    @media ${breakpoint.tablet} {
      font-size: 2.5rem;
    }

    @media ${breakpoint.desktop} {
      font-size: 3.5rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 4.5rem;
    }
  }
`;
