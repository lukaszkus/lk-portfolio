import styled from "styled-components";

import { breakpoint } from "../../utils";

export const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  // align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 3rem;

  a {
    color: #c3cfe2;
    text-decoration: none;
  }

  @media ${breakpoint.tablet} {
    // justify-content: center;
    font-size: 3.5rem;
  }

  @media ${breakpoint.desktop} {
    padding: 1.5rem;
    font-size: 4.5rem;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-135deg, #6a11cb 0%, #2575fc 100%);
  box-shadow: 10px 10px 20px 0px rgba(36, 41, 48, 0.6);
  border-radius: 1rem;
`;

export const MenuItem = styled.li`
  &:first-child {
    padding-bottom: 10px;
  }
`;
