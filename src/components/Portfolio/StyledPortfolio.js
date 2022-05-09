import styled from "styled-components";
import { breakpoint } from "../../utils";

export const PContainer = styled.section.attrs((props) => ({
  id: props.id,
}))`
  display: grid;
  gap: 2rem;
  padding: 2rem 2rem;
  overflow: hidden;
  margin-bottom: 2rem;
  // background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
  position: relative;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    // padding: 3rem;
  }

  @media ${breakpoint.desktop} {
    grid-template-columns: repeat(3, 1fr);
    // padding: 6rem;
  }

  @media ${breakpoint.desktopXL} {
    gap: 2rem;
  }
`;

export const PBoxContainer = styled.div`
  &:hover {
    opacity: 0.95;
    z-index: 999;
  }
`;

export const PBox = styled.article`
  object-fit: cover;
  max-height: 50vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
  background: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
`;

export const PBoxImg = styled.img`
  width: 100%;
  height: auto;
`;

export const PBoxOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background: ${(props) => props.overlayColor};

  &:hover {
    opacity: 1;
  }
`;

export const PBoxText = styled.div`
  color: white;
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.2rem;
`;

export const PBoxTitle = styled.h2`
  padding: 5px;
`;

export const PBoxCat = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
`;
