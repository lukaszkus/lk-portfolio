import styled from "styled-components";

import { breakpoint } from "../../utils";

export const FContainer = styled.footer`
  min-height: 40vh;
  position: relative;
  width: 100%;
  // height: 100%;
  padding: 2rem;
  display: flex;

  @media ${breakpoint.desktop} {
    padding: 4rem;
  }
`;

export const FBoxContainer = styled.div`
  width: 100%;
  border-top: 1px solid #2575fc;
  padding: 2rem 0;

  @media ${breakpoint.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    // gap: 2rem;
  }

  @media ${breakpoint.desktop} {
  }
`;

export const FBox = styled.div`
  font-family: "Poppins", sans-serif;
  padding-bottom: 2rem;
  text-align: center;
`;

export const FBoxTitle = styled.p`
  font-weight: 600;
  color: #2575fc;
`;

export const FBoxContent = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
`;

export const FLink = styled.a.attrs((props) => ({
  href: props.path,
}))`
  &:first-child {
    padding-right: 20px;

    @media ${breakpoint.tablet} {
      padding-right: 15px;
    }
  }
`;

export const FIcon = styled.img.attrs((props) => ({
  src: props.icon,
}))`
  height: 1.5rem;
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
