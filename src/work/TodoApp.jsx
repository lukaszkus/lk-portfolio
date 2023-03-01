import { useContext } from "react";
import Context from "../context/context";
import { motion } from "framer-motion";

import { COLORS, images, portfolioItems } from "../utils";
import { OuterLink } from "../subcomponents";

import {
  Container,
  Description,
  Grid,
  Heading,
  Hero,
  HeroImg,
  Icon,
  ImageItem,
  List,
  Section,
  TextItem,
} from "./StyledElements";

function TodoApp({ id }) {
  const { offset } = useContext(Context);
  const item = portfolioItems.find((item) => item.id === id);
  const { title, category, project, cover, bgColor } = item;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <Hero bgColor={bgColor}>
          <HeroImg
            offset={offset}
            cover={cover}
            alt={`${title} - ${category}`}
            // animate={{ opacity: [0, 1], y: [500, 0] }}
            // transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            // exit={{ opacity: 0, y: -500 }}
          />
        </Hero>
        <Section id="section">
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
        </Section>
        <Section>
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
        </Section>
        <Section bgColor={bgColor} data-aos="fade-up">
          <Container>
            <Grid>
              <TextItem data-aos="fade-up">
                <h3>Mobile screens</h3>
                <p>
                  The application is built with the Mobile First approach and
                  RWD (Responisve Web Design) method that enables web to fit the
                  screens of different devices automatically.
                </p>
                <Icon icon={images.mobile_first} alt="Mobile first" />
              </TextItem>
              <ImageItem data-aos="fade-up">
                <img src={images.todo_mobile} alt="Todo App mobile screen" />
              </ImageItem>
            </Grid>
          </Container>
        </Section>
      </motion.div>
    </>
  );
}

export default TodoApp;
