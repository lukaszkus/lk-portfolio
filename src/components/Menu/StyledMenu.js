import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  @media ${breakpoint.desktop} {
    width: 35%;
  }

  @media ${breakpoint.desktop} {
    padding: 1.5rem;
  }
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-135deg, #6a11cb 0%, #2575fc 100%);
  box-shadow: 18px 33px 47px 2px rgba(36, 41, 48, 0.49);
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2.75rem;

  @media ${breakpoint.tablet} {
    font-size: 3rem;
  }

  a {
    color: #c3cfe2;
    text-decoration: none;
  }
`;

export const MenuItem = styled.li``;
