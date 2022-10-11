import { useContext } from "react";
import Context from "../context/context";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { COLORS, images, portfolioItems, ScrollToTop } from "../utils";
import { OuterLink } from "../subcomponents";

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
  LinkContainer,
  Section,
  TextItem,
} from "./StyledElements";

function FrontendMentor() {
  const { offset } = useContext(Context);
  const item = portfolioItems[3];
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
                      href={project.links.frontendMentor}
                      icon="frontendMentor"
                      text="Frontend Mentor"
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

        <Section bgColor="rgba(237, 211, 211, 0.8)" data-aos="fade-up">
          <Container>
            <Grid>
              <ImageItem data-aos="fade-up">
                <img
                  src={images.fm_baseapparel}
                  alt="Base Apparel comming soon page"
                />
              </ImageItem>
              <TextItem
                color="#935653"
                bgColor="rgba(255, 255, 255, 0.2)"
                data-aos="fade-up"
              >
                <h3>Base Apparel comming soon page</h3>
                <p>
                  A great project to practice responsive layout building and
                  simple form validation.
                  <br />
                  Users are able to view the optimal layout depending on their
                  device's screen size, see hover states for all interactive
                  elements, receive an error message when the form is submitted
                  (if the input field is empty or email address is not formatted
                  correctly).
                </p>
                <p>Build with:</p>
                <ul>
                  {[
                    "Semantic HTML markup",
                    "SCSS",
                    "Vanilla JS",
                    "BEM methodology",
                    "Flexbox",
                    "RWD",
                    "Mobile first approach",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink
                    href="https://lukaszkus.github.io/base-apparel-coming-soon"
                    icon="liveSite"
                    text="Live site"
                    width="20px"
                    height="20px"
                    color="#935653"
                  />
                  <OuterLink
                    href="https://lukaszkus.github.io/base-apparel-coming-soon"
                    icon="github"
                    text="Github"
                    width="20px"
                    height="20px"
                    color="#935653"
                  />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Container>
        </Section>

        <Section data-aos="fade-up">
          <Container>
            <Grid>
              <TextItem
                color="#c3cfe2"
                bgColor="rgba(0, 0, 0, 0.1)"
                data-aos="fade-up"
              >
                <h3>Easybank landing page</h3>
                <p>
                  A responisve landing page with mobile navigation menu toggle.
                  <br /> Users are able to view the optimal layout for the site
                  depending on their device's screen size, see hover states for
                  all interactive elements on the page.
                </p>
                <p>Build with:</p>
                <ul>
                  {[
                    "Semantic HTML markup",
                    "SCSS",
                    "Vanilla JS",
                    "BEM methodology",
                    "Flexbox",
                    "RWD",
                    "Mobile first approach",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink
                    href="https://lukaszkus.github.io/easybank-landing-page"
                    icon="liveSite"
                    text="Live site"
                    width="20px"
                    height="20px"
                    color="#c3cfe2"
                  />
                  <OuterLink
                    href="https://github.com/lukaszkus/easybank-landing-page"
                    icon="github"
                    text="Github"
                    width="20px"
                    height="20px"
                    color="#c3cfe2"
                  />
                </LinkContainer>
              </TextItem>
              <ImageItem data-aos="fade-up">
                <img src={images.fm_easybank} alt="Easybank landing page" />
              </ImageItem>
            </Grid>
          </Container>
        </Section>

        <Section bgColor="rgba(37, 42, 65, 0.8)" data-aos="fade-up">
          <Container>
            <Grid>
              <ImageItem data-aos="fade-up">
                <img src={images.fm_social} alt="Social media dashboard" />
              </ImageItem>
              <TextItem
                color="#8b97c6"
                bgColor="rgba(0, 0, 0, 0.2)"
                data-aos="fade-up"
              >
                <h3>Social media dashboard</h3>
                <p>
                  It is a responsive dashboard layout with color theme switcher.
                  A perfect challenge to practice Grid or Flexbox skills.
                  <br />
                  Users are able to see hover states for all interactive
                  elements on the page, view the optimal layout for the site
                  depending on their device's screen size, toggle color theme to
                  their preference.
                </p>
                <p>Build with:</p>
                <ul>
                  {[
                    "Semantic HTML markup",
                    "SCSS",
                    "Vanilla JS",
                    "BEM methodology",
                    "Flexbox",
                    "RWD",
                    "Mobile first approach",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink
                    href="https://lukaszkus.github.io/social-media-dashboard"
                    icon="liveSite"
                    text="Live site"
                    width="20px"
                    height="20px"
                    color="#8b97c6"
                  />
                  <OuterLink
                    href="https://github.com/lukaszkus/social-media-dashboard"
                    icon="github"
                    text="Github"
                    width="20px"
                    height="20px"
                    color="#8b97c6"
                  />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Container>
        </Section>

        <Section bgColor="rgba(178, 193, 235, 0.8)" data-aos="fade-up">
          <Container>
            <Grid>
              <TextItem bgColor="rgba(255, 255, 255, 0.2)" data-aos="fade-up">
                <h3>Order summary component</h3>
                <p>
                  It is a simple component build to practice layout skills.
                  <br /> Users are able to see hover states for interactive
                  elements.
                </p>
                <p>Build with:</p>
                <ul>
                  {[
                    "Semantic HTML markup",
                    "SCSS",
                    "BEM methodology",
                    "Flexbox",
                    "RWD",
                    "Mobile first approach",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink
                    href="https://lukaszkus.github.io/order-component"
                    icon="liveSite"
                    text="Live site"
                    width="20px"
                    height="20px"
                    color={COLORS.white}
                  />
                  <OuterLink
                    href="https://github.com/lukaszkus/order-component"
                    icon="github"
                    text="Github"
                    width="20px"
                    height="20px"
                    color={COLORS.white}
                  />
                </LinkContainer>
              </TextItem>
              <ImageItem data-aos="fade-up">
                <img src={images.fm_order} alt="Order summary component" />
              </ImageItem>
            </Grid>
          </Container>
        </Section>

        <Section data-aos="fade-up">
          <Container>
            <Grid>
              <ImageItem data-aos="fade-up">
                <img src={images.fm_huddle} alt="Huddle landing page" />
              </ImageItem>
              <TextItem
                color="#c3cfe2"
                bgColor="rgba(0, 0, 0, 0.1)"
                data-aos="fade-up"
              >
                <h3>Huddle landing page</h3>
                <p>
                  A responisve landing page where users are able to view the
                  optimal layout for the site depending on their device's screen
                  size and see hover states for all interactive elements on the
                  page.
                </p>
                <p>Build with:</p>
                <ul>
                  {[
                    "Semantic HTML markup",
                    "SCSS",
                    "BEM methodology",
                    "Flexbox",
                    "RWD",
                    "Mobile first approach",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink
                    href="https://lukaszkus.github.io/huddle-landing-page"
                    icon="liveSite"
                    text="Live site"
                    width="20px"
                    height="20px"
                    color="#c3cfe2"
                  />
                  <OuterLink
                    href="https://github.com/lukaszkus/huddle-landing-page"
                    icon="github"
                    text="Github"
                    width="20px"
                    height="20px"
                    color="#c3cfe2"
                  />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Container>
        </Section>

        <Section bgColor="rgba(125, 130, 228, 0.8)" data-aos="fade-up">
          <Container>
            <Grid>
              <TextItem
                color="#f6f6fe"
                bgColor="rgba(255, 255, 255, 0.1)"
                data-aos="fade-up"
              >
                <h3>Pricing component</h3>
                <p>
                  Responsive pricing component where users are able to toggle
                  monthly to annual prices, view the optimal layout for the site
                  depending on their device's screen size and see hover states
                  for all interactive elements on the page.
                </p>
                <p>Build with:</p>
                <ul>
                  {[
                    "Semantic HTML markup",
                    "SCSS",
                    "Vanilla JS",
                    "BEM methodology",
                    "Flexbox",
                    "RWD",
                    "Mobile first approach",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink
                    href="https://lukaszkus.github.io/pricing-component"
                    icon="liveSite"
                    text="Live site"
                    width="20px"
                    height="20px"
                    color="#f6f6fe"
                  />
                  <OuterLink
                    href="https://github.com/lukaszkus/pricing-component"
                    icon="github"
                    text="Github"
                    width="20px"
                    height="20px"
                    color="#f6f6fe"
                  />
                </LinkContainer>
              </TextItem>
              <ImageItem data-aos="fade-up">
                <img src={images.fm_pricing} alt="Pricing component" />
              </ImageItem>
            </Grid>
          </Container>
        </Section>

        <Section data-aos="fade-up">
          <Container>
            <Grid>
              <ImageItem data-aos="fade-up">
                <img
                  src={images.fm_timetracking}
                  alt="Time tracking dashboard"
                />
              </ImageItem>
              <TextItem
                color="#c3cfe2"
                bgColor="rgba(0, 0, 0, 0.1)"
                data-aos="fade-up"
              >
                <h3>Time tracking dashboard</h3>
                <p>
                  Dashboard layout build with CSS Grid. The data is pull from
                  local
                  <i> data.json</i> file.
                  <br />
                  Users are able to switch between viewing Daily, Weekly, and
                  Monthly stats, see hover states for all interactive elements
                  on the page and view the optimal layout for the site depending
                  on their device's screen size.
                </p>
                <p>Build with:</p>
                <ul>
                  {[
                    "Semantic HTML markup",
                    "SCSS",
                    "Vanilla JS",
                    "BEM methodology",
                    "Flexbox",
                    "RWD",
                    "Mobile first approach",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink
                    href="https://lukaszkus.github.io/time-tracking-dashboard"
                    icon="liveSite"
                    text="Live site"
                    width="20px"
                    height="20px"
                    color="#c3cfe2"
                  />
                  <OuterLink
                    href="https://github.com/lukaszkus/time-tracking-dashboard"
                    icon="github"
                    text="Github"
                    width="20px"
                    height="20px"
                    color="#c3cfe2"
                  />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Container>
        </Section>

        <Section bgColor="rgba(85, 156, 161, 0.8)" data-aos="fade-up">
          <Container>
            <Grid>
              <TextItem
                color="#f2f2f2"
                bgColor="rgba(255, 255, 255, 0.1)"
                data-aos="fade-up"
              >
                <h3>3 column component</h3>
                <p>
                  Simple, responsive 3 column component. Users are able to view
                  the optimal layout for the site depending on their device's
                  screen size and see hover states for all interactive elements
                  on the page.
                </p>
                <p>Build with:</p>
                <ul>
                  {[
                    "Semantic HTML markup",
                    "SCSS",
                    "BEM methodology",
                    "Flexbox",
                    "RWD",
                    "Mobile first approach",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink
                    href="https://lukaszkus.github.io/3-column-component"
                    icon="liveSite"
                    text="Live site"
                    width="20px"
                    height="20px"
                    color="#f2f2f2"
                  />
                  <OuterLink
                    href="https://github.com/lukaszkus/3-column-component"
                    icon="github"
                    text="Github"
                    width="20px"
                    height="20px"
                    color="#f2f2f2"
                  />
                </LinkContainer>
              </TextItem>
              <ImageItem data-aos="fade-up">
                <img src={images.fm_3column} alt="3 column component" />
              </ImageItem>
            </Grid>
          </Container>
        </Section>
      </motion.div>
    </>
  );
}

export default FrontendMentor;
