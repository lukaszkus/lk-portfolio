import { motion } from "framer-motion";

import { COLORS, images, portfolioItems } from "../utils";
import { OuterLink } from "../subcomponents";

import {
  Wrapper,
  Container,
  Description,
  Grid,
  Heading,
  Hero,
  ImageItem,
  List,
} from "./StyledElements";

function TodoApp({ id }) {
  const item = portfolioItems.find((item) => item.id === id);
  const { title, category, project, cover } = item;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <Hero>
            <img
              src={cover}
              // alt=""
              alt={`${title} - ${category}`}
            />
          </Hero>
        </Container>

        <Wrapper>
          <Container>
            <Heading data-aos="fade-up">
              <h1>{title}</h1>
              <h3>{category}</h3>
            </Heading>

            <Description>
              <div data-aos="fade-up">
                <p>{project.description}</p>
                <p>{project.details}</p>
              </div>

              <List>
                <ul data-aos="fade-up">
                  <p>My role:</p>
                  {project.role.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <ul data-aos="fade-up">
                  <p>Technology used:</p>
                  {project.technology.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <ul data-aos="fade-up">
                  <p>Links:</p>
                  <li>
                    <OuterLink
                      href={project.links.liveSite}
                      icon="liveSite"
                      text="Live site"
                      width="20px"
                      height="20px"
                      color={COLORS.accentPrimary}
                    />
                  </li>
                  <li>
                    <OuterLink
                      href={project.links.github}
                      icon="github"
                      text="Github"
                      width="20px"
                      height="20px"
                      color={COLORS.accentPrimary}
                    />
                  </li>
                </ul>
              </List>
            </Description>
          </Container>

          <Container>
            <Grid>
              <ImageItem data-aos="fade-up">
                <img src={images.todo_light} alt="Todo App light mode" />
                <figcaption>Todo App light mode</figcaption>
              </ImageItem>
              <ImageItem data-aos="fade-up">
                <img src={images.todo_dark} alt="Todo App dark mode" />
                <figcaption>Todo App dark mode</figcaption>
              </ImageItem>
            </Grid>
          </Container>
        </Wrapper>
      </motion.div>
    </>
  );
}

export default TodoApp;
