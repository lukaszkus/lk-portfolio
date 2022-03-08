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
  z-index: -1;
`;

const HeroImg = styled.img.attrs((props) => ({
  src: props.cover,
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
  max-width: 1024px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Heading = styled.div`
  padding-bottom: 1rem;

  h2 {
    font-size: 2rem;
    padding: 2rem 0;

    @media ${breakpoint.tablet} {
      font-size: 2.5rem;
    }

    @media ${breakpoint.desktopXL} {
      font-size: 4rem;
    }
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
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
  }
`;

const ListWrapper = styled.div`
  @media ${breakpoint.tablet} {
    display: flex;
    gap: 15%;
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

  a {
    color: #000;

    &:hover {
      color: #6a11cb;
    }
  }
`;

const Grid = styled.section`
  display: grid;
  gap: 2rem;
  padding: 0 2rem 4rem 2rem;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.figure`
  display: grid;
  place-items: center;
  img {
    width: 100%;
    height: auto;
  }
  figcaption {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    padding: 1rem 0;
  }
`;

const Animation = styled.section`
  padding: 2rem;
  display: grid;
  place-items: center;
  background: ${(props) => props.overlayColor};
  @media ${breakpoint.tablet} {
    padding: 6rem;
  }

  img {
    width: 100%;
    height: auto;

    @media ${breakpoint.tablet} {
      width: 80%;
    }
  }
  figcaption {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
`;

function TodoApp({ offset }) {
  const item = portfolioItems[0];
  const { title, category, project, cover, bgColor, overlayColor } = item;

  return (
    <>
      <Hero bgColor={bgColor}>
        <HeroImg offset={offset} cover={cover} alt={`${title} - ${category}`} />
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

          <ListWrapper>
            <List>
              <p>My role:</p>
              {project.role.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </List>
            <List>
              <p>Technology used:</p>
              {project.technology.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </List>
            <List>
              <p>Links:</p>
              <li>
                <a href={project.links.liveSite}>Live site</a>
              </li>
              <li>
                <a href={project.links.github}>Github</a>
              </li>
            </List>
          </ListWrapper>
        </DescContainer>
      </Project>
      <Grid>
        <GridItem>
          <img src="../images/todo/light-mode.png" alt="Todo App light mode" />
          <figcaption>Todo App light mode</figcaption>
        </GridItem>
        <GridItem>
          <img src="../images/todo/dark-mode.png" alt="Todo App dark mode" />
          <figcaption>Todo App dark mode</figcaption>
        </GridItem>
      </Grid>
      <Animation overlayColor={overlayColor}>
        <figcaption>Create Read Update Delete operations</figcaption>
        <img src="../images/todo/todo-animation.gif" alt="Todo App in action" />
      </Animation>
    </>
  );
}

export default TodoApp;
