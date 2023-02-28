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
  ImageItem,
  List,
  Section,
} from "./StyledElements";

function InspirationWay({ id }) {
  const { offset } = useContext(Context);
  const item = portfolioItems.find((item) => item.id === id);
  const { title, category, project, cover, bgColor } = item;

  return (
    <>
      <Container>
        <Heading data-aos="fade-up">
          <h1>{title}</h1>
          <h3>{category}</h3>
        </Heading>
      </Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero bgColor={bgColor}>
          <HeroImg
            offset={offset}
            cover={cover}
            alt={`${title} - ${category}`}
            animate={{ opacity: [0, 1], y: [500, 0] }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            exit={{ opacity: 0, y: -500 }}
          />
        </Hero>

        <Section id="section">
          <Container>
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
        </Section>

        <Section>
          <Container>
            <Grid>
              {/* <ImageItem data-aos="fade-up">
                <img src={images.iw_desktop_home} alt="Desktop Home page" />
              </ImageItem>
              <ImageItem data-aos="fade-up">
                <img src={images.iw_desktop_about} alt="Desktop About page" />
              </ImageItem>
              <ImageItem data-aos="fade-up">
                <img
                  src={images.iw_desktop_services}
                  alt="Desktop Services page"
                />
              </ImageItem>
              <ImageItem data-aos="fade-up">
                <img
                  src={images.iw_desktop_contact}
                  alt="Desktop Contact page"
                />
              </ImageItem> */}
              {[
                images.iw_desktop_home,
                images.iw_desktop_about,
                images.iw_desktop_services,
                images.iw_desktop_contact,
              ].map((image, index) => (
                <ImageItem key={index}>
                  <img src={image} alt={image} data-aos="fade-up" />
                </ImageItem>
              ))}
            </Grid>
          </Container>
        </Section>
      </motion.div>
    </>
  );
}

export default InspirationWay;
