import styled from "styled-components";
import breakpoint from "../utils/breakpoints";
import portfolioItems from "../utils/portfolioItems";

const PContainer = styled.section`
  display: grid;
  gap: 2rem;
  padding: 2rem 2rem;
  overflow: hidden;
  margin-bottom: 60px;

  @media ${breakpoint.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 3rem 4rem;
  }

  @media ${breakpoint.device.desktop} {
    grid-template-columns: repeat(3, 1fr);
    padding: 4rem 6rem;
  }
`;

const PBoxContainer = styled.div`
  &:hover {
    opacity: 0.95;
    z-index: 999;
  }
`;

const PBox = styled.article`
  height: ${(props) => props.height};
  // height: 50vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
  background: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  transform: ${(props) => props.transform};
`;

const PBoxImg = styled.img`
  max-width: 100%;
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
    opacity: 0.95;
  }
`;

const PBoxText = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const PBoxTitle = styled.h2``;

const PBoxCat = styled.p`
  font-family: "Poppins", sans-serif;
`;

function Portfolio() {
  return (
    <PContainer>
      {portfolioItems.map((item) => (
        <PBoxContainer data-aos="fade-up">
          <PBox
            key={item.id}
            bgColor={item.bgColor}
            transform={item.transform}
            height={item.height}>
            <PBoxImg src={item.url} alt={item.title}></PBoxImg>
            <PBoxOverlay overlayColor={item.overlayColor}>
              <PBoxText>
                <PBoxTitle>{item.title}</PBoxTitle>
                <PBoxCat>{item.category}</PBoxCat>
              </PBoxText>
            </PBoxOverlay>
          </PBox>
        </PBoxContainer>
      ))}
    </PContainer>
  );
}

export default Portfolio;
