import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

import { portfolioItems, breakpoint } from "../utils";

const PContainer = styled.section.attrs((props) => ({
  id: props.id,
}))`
  display: grid;
  gap: 2rem;
  padding: 2rem 2rem;
  overflow: hidden;
  margin-bottom: 2rem;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  position: relative;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    padding: 3rem;
  }

  @media ${breakpoint.desktop} {
    grid-template-columns: repeat(3, 1fr);
    padding: 6rem;
  }

  @media ${breakpoint.desktopXL} {
    gap: 4rem;
  }
`;

const PBoxContainer = styled.div`
  &:hover {
    opacity: 0.95;
    z-index: 999;
  }
`;

const PBox = styled.article`
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

const PBoxImg = styled.img`
  width: 100%;
  height: auto;
`;

const PBoxOverlay = styled.div`
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

const PBoxText = styled.div`
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

const PBoxTitle = styled.h2`
  padding: 5px;
`;

const PBoxCat = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
`;

function Portfolio() {
  return (
    <PContainer id="portfolio">
      {portfolioItems.map((item) => (
        <PBoxContainer key={item.id} data-aos="fade-up">
          <Link to={item.path}>
            <PBox
              bgColor={item.bgColor}
              transform={item.transform}
              height={item.height}
            >
              <PBoxImg src={item.cover} alt={item.title}></PBoxImg>
              <PBoxOverlay overlayColor={item.overlayColor}>
                <PBoxText>
                  <PBoxTitle>{item.title}</PBoxTitle>
                  <PBoxCat>{item.category}</PBoxCat>
                </PBoxText>
              </PBoxOverlay>
            </PBox>
          </Link>
        </PBoxContainer>
      ))}
    </PContainer>
  );
}

export default Portfolio;