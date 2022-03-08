import styled from "styled-components";
import breakpoint from "../utils/breakpoints";
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
  // background-size: cover;
  z-index: -1;
`;

const HeroImg = styled.img.attrs((props) => ({
  src: props.url,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  z-index: -1;
  transform: translateY(${(props) => props.offset / 4}px);
`;

const Project = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Heading = styled.div`
  padding-bottom: 1rem;

  h2 {
    font-size: 2rem;
    padding: 2rem 0;

    @media ${breakpoint.device.tablet} {
      font-size: 2.5rem;
    }

    @media ${breakpoint.device.desktopXL} {
      font-size: 4rem;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    @media ${breakpoint.device.tablet} {
      font-size: 1.2rem;
    }
  }
`;

const DescContainer = styled.div`
  line-height: 1.8;
`;

const Description = styled.div`
  p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 0;

    @media ${breakpoint.device.tablet} {
      font-size: 1.2rem;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  padding: 1rem 0;

  p {
    font-weight: 400;
  }

  @media ${breakpoint.device.tablet} {
    font-size: 1.2rem;
  }
`;

function TodoApp({ offset }) {
  const item = portfolioItems[0];
  const { title, category, project, url, bgColor } = item;

  return (
    <>
      <Hero bgColor={bgColor}>
        <HeroImg offset={offset} url={url} alt={`${title} - ${category}`} />
        {/* <div className="text-wrapper">
        <h1 className="headline">{title}</h1>
        <h2 className="sub-headline">{category}</h2>
      </div> */}
      </Hero>
      <Project>
        <Heading>
          <h2>{title}</h2>
          <p>{category}</p>
        </Heading>

        <DescContainer>
          <Description>
            <p>{project.description}</p>
            <p>{project.details}</p>
          </Description>

          <List>
            <p>Technology</p>
            {project.technology.map((item) => (
              <li>{item}</li>
            ))}
          </List>
        </DescContainer>
      </Project>
    </>
  );
}

export default TodoApp;
