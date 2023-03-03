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

function InspirationWay({ id }) {
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
                  <p>Tools:</p>
                  {project.tools.map((item, index) => (
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
                </ul>
              </List>
            </Description>
          </Container>

          <Container>
            <Grid>
              {[
                images.iw_desktop_home,
                images.iw_desktop_about,
                images.iw_desktop_services,
                images.iw_desktop_contact,
              ].map((image, index) => (
                <ImageItem key={index}>
                  <img src={image} alt="Desktop" data-aos="fade-up" />
                </ImageItem>
              ))}
            </Grid>
          </Container>
        </Wrapper>
      </motion.div>
    </>
  );
}

export default InspirationWay;
