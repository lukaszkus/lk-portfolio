import styled from "styled-components";
import portfolioItems from "../utils/portfolioItems";

const Hero = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: ${(props) => props.bgColor};
  background-size: cover;
  z-index: -1;
`;

const HeroImg = styled.img.attrs((props) => ({
  src: props.url,
  alt: props.alt,
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: -1;
  transform: translateY(${(props) => props.offset / 4}px);
`;

const Project = styled.main`
  height: 100vh;
`;

function TodoApp({ offset }) {
  const item = portfolioItems[0];
  const { title, category, url, bgColor } = item;

  return (
    <>
      <Hero bgColor={bgColor}>
        <HeroImg offset={offset} url={url} alt={`${title} - ${category}`} />
        {/* <div className="text-wrapper">
        <h1 className="headline">{title}</h1>
        <h2 className="sub-headline">{category}</h2>
      </div> */}
      </Hero>
      <Project></Project>
    </>
  );
}

export default TodoApp;
