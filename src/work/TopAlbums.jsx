import { useContext } from "react";
import Context from "../context/context";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { COLORS, images, portfolioItems } from "../utils";
import { OuterLink } from "../subcomponents";

import {
  Arrow,
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

function TopAlbums({ id }) {
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
            animate={{ opacity: [0, 1], y: [500, 0] }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            exit={{ opacity: 0, y: -500 }}
          />
          <Link
            to="section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <Arrow />
          </Link>
        </Hero>

        <Section id="section">
          <Container>
            <Heading data-aos="fade-up">
              <h2>{title}</h2>
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
                      href={project.links.github}
                      icon="github"
                      text="Github"
                      width="20px"
                      height="20px"
                      color={COLORS.accentPrimary}
                    />
                  </li>
                  <li>
                    <OuterLink
                      href={project.links.download}
                      icon="download"
                      text="Download APK file"
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
            <Heading data-aos="fade-up">
              <h3>Design</h3>
            </Heading>
            <Grid>
              <ImageItem data-aos="fade-up">
                <img src={images.ta_brand_01} alt="Top Albums logo" />
                <figcaption>App logo</figcaption>
              </ImageItem>
              <ImageItem data-aos="fade-up">
                <img
                  src={images.ta_brand_02}
                  alt="Splash screen & adaptive icons"
                />
                <figcaption>
                  Splash screen & adaptive icons (favicons)
                </figcaption>
              </ImageItem>
              <ImageItem data-aos="fade-up">
                <img
                  src={images.ta_brand_03}
                  alt="Icons set | navigation icons & navbars"
                />
                <figcaption>Icons set | navigation icons & navbars</figcaption>
              </ImageItem>
              <ImageItem data-aos="fade-up">
                <img src={images.ta_brand_04} alt="Typography & colors" />
                <figcaption>Typography & colors</figcaption>
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

export default TopAlbums;
