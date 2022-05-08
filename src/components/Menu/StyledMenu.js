import styled from "styled-components";

import { breakpoint } from "../../utils";

export const MenuContainer = styled.nav`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-135deg, #6a11cb 0%, #2575fc 100%);
  display: flex;
  align-items: center;
  padding: 2rem;
  font-size: 2.5rem;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};

  a {
    color: #c3cfe2;
    text-decoration: none;
  }

  @media ${breakpoint.tablet} {
    justify-content: center;
    font-size: 3.5rem;
  }

  @media ${breakpoint.desktop} {
    font-size: 4.5rem;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li`
  &:first-child {
    padding-bottom: 10px;
  }
`;
