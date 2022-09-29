import { useContext } from "react";
import Context from "../context/context";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { images, portfolioItems } from "../utils";
import ScrollToTop from "../utils/scrollToTop";

import {
  Arrow,
  Container,
  Description,
  Grid,
  Heading,
  Hero,
  HeroImg,
  ImageItem,
  List,
  Section,
  TextItem,
} from "./StyledElements";

function WildnSlow() {
  const { offset } = useContext(Context);
  const item = portfolioItems[2];
  const { title, category, project, cover, bgColor } = item;

  return (
    <>
      <ScrollToTop />
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
          <Link
            to="section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
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
              </List>
            </Description>
          </Container>
        </Section>

        <Section>
          <Container>
            <Grid>
              <ImageItem data-aos="fade-up">
                <img src={images.wns_tag} alt="Label" />
                <figcaption>Label</figcaption>
              </ImageItem>
              <ImageItem data-aos="fade-up">
                <img src={images.wns_box} alt="Bos sticker" />
                <figcaption>Box sticker</figcaption>
              </ImageItem>
            </Grid>
          </Container>
        </Section>

        <Section bgColor={bgColor} data-aos="fade-up">
          <Container>
            <Grid>
              <TextItem data-aos="fade-up">
                <h3>Badges</h3>
                <p>
                  The application is built with the Mobile First approach and
                  RWD (Responisve Web Design) method that enables web to fit the
                  screens of different devices automatically.
                </p>
              </TextItem>
            </Grid>
            <ImageItem data-aos="fade-up">
              <img src={images.wns_badges} alt="Badges" />
            </ImageItem>
          </Container>
        </Section>
      </motion.div>
    </>
  );
}

export default WildnSlow;
