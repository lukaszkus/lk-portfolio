import styled from "styled-components";

import { breakpoint } from "../../utils";

export const FContainer = styled.footer`
  min-height: 40vh;
  position: relative;
  width: 100%;
  padding: 2rem;
  display: flex;

  @media ${breakpoint.tablet} {
    padding: 4rem;
  }

  @media ${breakpoint.desktop} {
    padding: 6rem;
  }
`;

export const FBoxContainer = styled.div`
  width: 100%;
  border-top: 1px solid #6a11cb;
  padding: 2rem 0;

  @media ${breakpoint.tablet} {
    display: flex;
    gap: 4rem;
  }

  @media ${breakpoint.desktop} {
  }
`;

export const FBox = styled.div`
  font-family: "Poppins", sans-serif;
  padding-bottom: 2rem;
`;

export const FBoxTitle = styled.p`
  font-weight: 600;
  color: #6a11cb;
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
