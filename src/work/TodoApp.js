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

const FullWidth = styled.section`
  padding: 4rem 2rem;
  background-image: ${(props) => (props.bgColor ? props.bgColor : null)};
`;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Heading = styled.div`
  h2 {
    font-size: 2rem;
    padding-bottom: 2rem;

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

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media ${breakpoint.desktop} {
    gap: 4rem;
    // padding: 2rem 0;
  }
`;

const GridItem = styled.figure`
  display: grid;
  place-items: center;
  img {
    width: 100%;
    height: auto;
    // filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5));
  }
  figcaption {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 0;
  }
`;

const TextItem = styled.article`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #c3cfe2;
  padding: 1rem 0;
  line-height: 1.8;
  text-align: center;

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    padding: 1rem 0;
  }

  @media ${breakpoint.tablet} {
    align-items: flex-start;
    text-align: left;
  }
`;

function TodoApp({ offset }) {
  const item = portfolioItems[0];
  const { title, category, project, cover, bgColor } = item;

  return (
    <>
      <Hero bgColor={bgColor}>
        <HeroImg offset={offset} cover={cover} alt={`${title} - ${category}`} />
      </Hero>

      <FullWidth>
        <Container>
          <Heading data-aos="fade-up">
            <h2>{title}</h2>
            <p>{category}</p>
          </Heading>

          <DescContainer>
            <Description data-aos="fade-up">
              <p>{project.description}</p>
              <p>{project.details}</p>
            </Description>

            <ListWrapper>
              <List data-aos="fade-up">
                <p>My role:</p>
                {project.role.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </List>
              <List data-aos="fade-up">
                <p>Technology used:</p>
                {project.technology.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </List>
              <List data-aos="fade-up">
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
        </Container>
      </FullWidth>

      <FullWidth>
        <Grid>
          <GridItem data-aos="fade-up">
            <img
              src="../images/todo/light-mode.png"
              alt="Todo App light mode"
            />
            <figcaption>Todo App light mode</figcaption>
          </GridItem>
          <GridItem data-aos="fade-up">
            <img src="../images/todo/dark-mode.png" alt="Todo App dark mode" />
            <figcaption>Todo App dark mode</figcaption>
          </GridItem>
        </Grid>
      </FullWidth>

      <FullWidth bgColor={bgColor} data-aos="fade-up">
        <Container>
          <Grid>
            <TextItem data-aos="fade-up">
              <h3>Mobile screens</h3>
              <p>
                The application is built with the Mobile First approach and RWD
                (Responisve Web Design) method that enables web to fit the
                screens of different devices automatically.
              </p>
            </TextItem>
            <GridItem data-aos="fade-up">
              <img
                src="../images/todo/todo-mobile.png"
                alt="Todo App mobile screen"
              />
            </GridItem>
          </Grid>
        </Container>
      </FullWidth>
    </>
  );
}

export default TodoApp;
