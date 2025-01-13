import useDocumentTitle from "../hooks/useDocumentTitle";
import { motion } from "framer-motion";

import { COLORS, images, portfolioItems } from "../utils";
import { OuterLink } from "../subcomponents";

import { Wrapper, Content, Description, Grid, Heading, HeroImg, ImageItem, List, TextItem, LinkContainer } from "./WorkPage.style";

import { Divider, PortfolioNav } from "../components";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const FrontendMentor = ({ id, titlePrefix, titleSuffix }) => {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);
  const item = portfolioItems.find((item) => item.id === id);
  const { title, category, project, cover } = item;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ...transition,
      },
    },
  };

  const child = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ...transition } },
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { ...transition } }} exit={{ opacity: 0, transition: { ...transition } }}>
        <HeroImg variants={container} initial="hidden" animate="show">
          <motion.img src={cover} variants={child} alt={`${title} - ${category}`} />
          <div></div>
        </HeroImg>

        <Wrapper>
          <Content>
            <Heading variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.h1 variants={child}>{title}</motion.h1>
              <motion.h2 variants={child}>{category}</motion.h2>
            </Heading>
            <Description>
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <motion.p variants={child}>{project.description}</motion.p>
                <motion.p variants={child}>{project.details}</motion.p>
              </motion.div>

              <List variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <motion.ul variants={child}>
                  <p>My role:</p>
                  {project.role.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </motion.ul>
                <motion.ul variants={child}>
                  <p>Technology used:</p>
                  {project.technology.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </motion.ul>
                <motion.ul variants={child}>
                  <p>Links:</p>
                  <li>
                    <OuterLink href={project.links.github} icon="github" text="Github" width="20px" height="20px" color={COLORS.accentPrimary} />
                  </li>
                  <li>
                    <OuterLink href={project.links.frontendMentor} icon="frontendMentor" text="Frontend Mentor" width="20px" height="20px" color={COLORS.accentPrimary} />
                  </li>
                </motion.ul>
              </List>
            </Description>
          </Content>
        </Wrapper>
        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.fm_baseapparel} alt="Base Apparel comming soon page" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Base Apparel comming soon page</h3>
                <p>
                  A great project to practice responsive layout builting and simple form validation.
                  <br />
                  Users are able to view the optimal layout depending on their device's screen size, see hover states for all interactive elements, receive an error message when the form is submitted (if the input field is empty or email address is not formatted correctly).
                </p>
                <p>Built with:</p>
                <ul>
                  {["Semantic HTML markup", "SCSS", "Vanilla JS", "BEM methodology", "Flexbox", "RWD", "Mobile first approach"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink href="https://lukaszkus.github.io/base-apparel-coming-soon" icon="liveSite" text="Live site" width="20px" height="20px" />
                  <OuterLink href="https://lukaszkus.github.io/base-apparel-coming-soon" icon="github" text="Github" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <TextItem variants={child}>
                <h3>Easybank landing page</h3>
                <p>
                  A responisve landing page with mobile navigation menu toggle.
                  <br /> Users are able to view the optimal layout for the site depending on their device's screen size, see hover states for all interactive elements on the page.
                </p>
                <p>Built with:</p>
                <ul>
                  {["Semantic HTML markup", "SCSS", "Vanilla JS", "BEM methodology", "Flexbox", "RWD", "Mobile first approach"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink href="https://lukaszkus.github.io/easybank-landing-page" icon="liveSite" text="Live site" width="20px" height="20px" />
                  <OuterLink href="https://github.com/lukaszkus/easybank-landing-page" icon="github" text="Github" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
              <ImageItem variants={child}>
                <img src={images.fm_easybank} alt="Easybank landing page" />
              </ImageItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.fm_social} alt="Social media dashboard" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Social media dashboard</h3>
                <p>
                  It is a responsive dashboard layout with color theme switcher. A perfect challenge to practice Grid or Flexbox skills.
                  <br />
                  Users are able to see hover states for all interactive elements on the page, view the optimal layout for the site depending on their device's screen size, toggle color theme to their preference.
                </p>
                <p>Built with:</p>
                <ul>
                  {["Semantic HTML markup", "SCSS", "Vanilla JS", "BEM methodology", "Flexbox", "RWD", "Mobile first approach"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink href="https://lukaszkus.github.io/social-media-dashboard" icon="liveSite" text="Live site" width="20px" height="20px" />
                  <OuterLink href="https://github.com/lukaszkus/social-media-dashboard" icon="github" text="Github" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <TextItem variants={child}>
                <h3>Order summary component</h3>
                <p>
                  It is a simple component built to practice layout skills.
                  <br /> Users are able to see hover states for interactive elements.
                </p>
                <p>Built with:</p>
                <ul>
                  {["Semantic HTML markup", "SCSS", "BEM methodology", "Flexbox", "RWD", "Mobile first approach"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink href="https://lukaszkus.github.io/order-component" icon="liveSite" text="Live site" width="20px" height="20px" />
                  <OuterLink href="https://github.com/lukaszkus/order-component" icon="github" text="Github" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
              <ImageItem variants={child}>
                <img src={images.fm_order} alt="Order summary component" />
              </ImageItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.fm_huddle} alt="Huddle landing page" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Huddle landing page</h3>
                <p>A responisve landing page where users are able to view the optimal layout for the site depending on their device's screen size and see hover states for all interactive elements on the page.</p>
                <p>Built with:</p>
                <ul>
                  {["Semantic HTML markup", "SCSS", "BEM methodology", "Flexbox", "RWD", "Mobile first approach"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink href="https://lukaszkus.github.io/huddle-landing-page" icon="liveSite" text="Live site" width="20px" height="20px" />
                  <OuterLink href="https://github.com/lukaszkus/huddle-landing-page" icon="github" text="Github" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <TextItem variants={child}>
                <h3>Pricing component</h3>
                <p>Responsive pricing component where users are able to toggle monthly to annual prices, view the optimal layout for the site depending on their device's screen size and see hover states for all interactive elements on the page.</p>
                <p>Built with:</p>
                <ul>
                  {["Semantic HTML markup", "SCSS", "Vanilla JS", "BEM methodology", "Flexbox", "RWD", "Mobile first approach"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink href="https://lukaszkus.github.io/pricing-component" icon="liveSite" text="Live site" width="20px" height="20px" />
                  <OuterLink href="https://github.com/lukaszkus/pricing-component" icon="github" text="Github" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
              <ImageItem variants={child}>
                <img src={images.fm_pricing} alt="Pricing component" />
              </ImageItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.fm_timetracking} alt="Time tracking dashboard" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Time tracking dashboard</h3>
                <p>
                  Dashboard layout built with CSS Grid. The data is pull from local
                  <i> data.json</i> file.
                  <br />
                  Users are able to switch between viewing Daily, Weekly, and Monthly stats, see hover states for all interactive elements on the page and view the optimal layout for the site depending on their device's screen size.
                </p>
                <p>Built with:</p>
                <ul>
                  {["Semantic HTML markup", "SCSS", "Vanilla JS", "BEM methodology", "Flexbox", "RWD", "Mobile first approach"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink href="https://lukaszkus.github.io/time-tracking-dashboard" icon="liveSite" text="Live site" width="20px" height="20px" />
                  <OuterLink href="https://github.com/lukaszkus/time-tracking-dashboard" icon="github" text="Github" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <TextItem variants={child}>
                <h3>3 column component</h3>
                <p>Simple, responsive 3 column component. Users are able to view the optimal layout for the site depending on their device's screen size and see hover states for all interactive elements on the page.</p>
                <p>Built with:</p>
                <ul>
                  {["Semantic HTML markup", "SCSS", "BEM methodology", "Flexbox", "RWD", "Mobile first approach"].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p>Go to:</p>
                <LinkContainer>
                  <OuterLink href="https://lukaszkus.github.io/3-column-component" icon="liveSite" text="Live site" width="20px" height="20px" />
                  <OuterLink href="https://github.com/lukaszkus/3-column-component" icon="github" text="Github" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
              <ImageItem variants={child}>
                <img src={images.fm_3column} alt="3 column component" />
              </ImageItem>
            </Grid>
          </Content>
        </Wrapper>
      </motion.div>
      <Divider label="Go to project" />
      <PortfolioNav id={id} />
    </>
  );
};

export default FrontendMentor;
