import { Link } from "react-scroll";
import styled from "styled-components";
import breakpoint from "../utils/breakpoints";
import portfolioItems from "../utils/portfolioItems";

import chevron from "../assets/chevron.svg";

const Hero = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background-image: ${(props) => props.bgColor};
  // z-index: -1;
`;

const HeroImg = styled.img.attrs((props) => ({
  src: props.cover,
  alt: props.alt,
}))`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  // z-index: 1;
  transform: translateY(${(props) => props.offset / 4}px);
`;

const Arrow = styled.img.attrs({
  src: `${chevron}`,
})`
  position: absolute;
  bottom: 30px;
  left: calc(50% - (30px / 2));
  width: 30px;
  transition: 0.3s ease-in-out;
  z-indx: 999;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Section = styled.section.attrs((props) => ({
  id: props.id,
}))`
  padding: 4rem 2rem;
  background-image: ${(props) => (props.bgColor ? props.bgColor : null)};
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};

  // &:first-of-type {
  //   padding-bottom: 0;
  // }
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

  h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
`;

const Description = styled.div`
  line-height: 1.8;
  div {
    p {
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 300;
      padding: 1rem 0;
    }
  }
`;

const List = styled.div`
  ul {
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
  }

  @media ${breakpoint.tablet} {
    display: flex;
    gap: 15%;
  }
`;

const Grid = styled.div`
  display: grid;
  // gap: 2rem;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
    // gap: 2rem;
  }

  @media ${breakpoint.desktop} {
    // gap: 4rem;
    // padding: 2rem 0;
  }
`;

const ImageItem = styled.figure`
  display: grid;
  place-items: center;
  order: 1;

  img {
    width: 100%;
    height: auto;
  }
  figcaption {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 0;
  }

  @media ${breakpoint.tablet} {
    padding-inline: 2rem;
    order: 0;
  }

  @media ${breakpoint.desktop} {
    padding-inline: 4rem;
  }
`;

const TextItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  order: 2;
  color: ${(props) => (props.color ? props.color : "#000")};
  padding: 1rem 0;
  line-height: 1.8;
  font-family: "Poppins", sans-serif;

  h3 {
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 0;
  }

  ul {
    list-style: none;
    font-weight: 400;
    padding-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  li {
    font-size: 0.75rem;
    font-weight: 300;
    padding: 0.3rem 0.8rem;
    border-radius: 25px;
    background-color: ${(props) => props.bgColor};
  }

  @media ${breakpoint.tablet} {
    align-items: flex-start;
    text-align: left;
    padding-inline: 2rem;
    order: 0;
  }

  @media ${breakpoint.desktop} {
    padding-inline: 4rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const LinkItem = styled.a.attrs((props) => ({
  href: props.href,
}))`
  color: ${(props) => (props.color ? props.color : "#000")};

  &:hover {
    text-decoration: none;
  }
`;

function FrontendMentor({ offset }) {
  const item = portfolioItems[2];
  const { title, category, project, cover, bgColor } = item;

  return (
    <>
      <Hero bgColor={bgColor}>
        <HeroImg offset={offset} cover={cover} alt={`${title} - ${category}`} />
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
                  <a href={project.links.github}>Github</a>
                </li>
                <li>
                  <a href={project.links.frontendMentor}>Frontend Mentor</a>
                </li>
              </ul>
            </List>
          </Description>
        </Container>
      </Section>

      <Section bgColor="#edd3d3" data-aos="fade-up">
        <Grid>
          <ImageItem data-aos="fade-up">
            <img
              src="../images/fm/fm-base-apparel.png"
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
              A great project to practice responsive layout building and simple
              form validation.
              <br />
              Users are able to: view the optimal layout depending on their
              device's screen size, see hover states for all interactive
              elements, receive an error message when the form is submitted (if
              the input field is empty or email address is not formatted
              correctly).
            </p>
            <p>Build with:</p>
            <ul>
              <li>Semantic HTML5 markup</li>
              <li>SCSS</li>
              <li>Vanilla JS</li>
              <li>BEM methodology</li>
              <li>Flexbox</li>
              <li>RWD</li>
              <li>Mobile first approach</li>
            </ul>
            <p>Go to:</p>
            <LinkContainer>
              <LinkItem
                href="https://lukaszkus.github.io/base-apparel-coming-soon"
                color="#935653"
              >
                Live site
              </LinkItem>
              <LinkItem
                href="https://github.com/lukaszkus/base-apparel-coming-soon"
                color="#935653"
              >
                Github repository
              </LinkItem>
            </LinkContainer>
          </TextItem>
        </Grid>
      </Section>

      <Section data-aos="fade-up">
        <Grid>
          <TextItem
            color="#2d314d"
            bgColor="rgba(255, 255, 255, 0.3)"
            data-aos="fade-up"
          >
            <h3>Easybank landing page</h3>
            <p>
              A responisve landing page with mobile navigation menu toggle.
              <br /> Users are able to: view the optimal layout for the site
              depending on their device's screen size, see hover states for all
              interactive elements on the page.
            </p>
            <p>Build with:</p>
            <ul>
              <li>Semantic HTML5 markup</li>
              <li>SCSS</li>
              <li>Vanilla JS</li>
              <li>BEM methodology</li>
              <li>Flexbox</li>
              <li>RWD</li>
              <li>Mobile first approach</li>
            </ul>
            <p>Go to:</p>
            <LinkContainer>
              <LinkItem
                href="https://lukaszkus.github.io/easybank-landing-page"
                color="#2d314d"
              >
                Live site
              </LinkItem>
              <LinkItem
                href="https://github.com/lukaszkus/easybank-landing-page"
                color="#2d314d"
              >
                Github repository
              </LinkItem>
            </LinkContainer>
          </TextItem>
          <ImageItem data-aos="fade-up">
            <img
              src="../images/fm/fm-easybank-landing.png"
              alt="Easybank landing page"
            />
          </ImageItem>
        </Grid>
      </Section>

      <Section bgColor="#252a41" data-aos="fade-up">
        <Grid>
          <ImageItem data-aos="fade-up">
            <img
              src="../images/fm/fm-social-dashboard.png"
              alt="Social media dashboard"
            />
          </ImageItem>
          <TextItem
            color="#8b97c6"
            bgColor="rgba(0, 0, 0, 0.2)"
            data-aos="fade-up"
          >
            <h3>Social media dashboard</h3>
            <p>
              It is a responsive dashboard layout with color theme switcher. A
              perfect challenge to practice Grid or Flexbox skills.
              <br />
              Users are able to: see hover states for all interactive elements
              on the page, view the optimal layout for the site depending on
              their device's screen size, toggle color theme to their
              preference.
            </p>
            <p>Build with:</p>
            <ul>
              <li>Semantic HTML5 markup</li>
              <li>SCSS</li>
              <li>Vanilla JS</li>
              <li>BEM methodology</li>
              <li>Flexbox</li>
              <li>RWD</li>
              <li>Mobile first approach</li>
            </ul>
            <p>Go to:</p>
            <LinkContainer>
              <LinkItem
                href="https://lukaszkus.github.io/social-media-dashboard"
                color="#8b97c6"
              >
                Live site
              </LinkItem>
              <LinkItem
                href="https://github.com/lukaszkus/social-media-dashboard"
                color="#8b97c6"
              >
                Github repository
              </LinkItem>
            </LinkContainer>
          </TextItem>
        </Grid>
      </Section>

      <Section bgColor="#b2c1eb" data-aos="fade-up">
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
              <li>Semantic HTML5 markup</li>
              <li>SCSS</li>
              <li>BEM methodology</li>
              <li>Flexbox</li>
              <li>RWD</li>
              <li>Mobile first approach</li>
            </ul>
            <p>Go to:</p>
            <LinkContainer>
              <LinkItem href="https://lukaszkus.github.io/order-component">
                Live site
              </LinkItem>
              <LinkItem href="https://github.com/lukaszkus/order-component">
                Github repository
              </LinkItem>
            </LinkContainer>
          </TextItem>
          <ImageItem data-aos="fade-up">
            <img
              src="../images/fm/fm-order-component.png"
              alt="Order summary component"
            />
          </ImageItem>
        </Grid>
      </Section>

      <Section data-aos="fade-up">
        <Grid>
          <ImageItem data-aos="fade-up">
            <img
              src="../images/fm/fm-huddle-landing.png"
              alt="Huddle landing page"
            />
          </ImageItem>
          <TextItem
            color="#674baf"
            bgColor="rgba(255, 255, 255, 0.2)"
            data-aos="fade-up"
          >
            <h3>Huddle landing page</h3>
            <p>
              A responisve landing page where users are able to: view the
              optimal layout for the site depending on their device's screen
              size and see hover states for all interactive elements on the
              page.
            </p>
            <p>Build with:</p>
            <ul>
              <li>Semantic HTML5 markup</li>
              <li>SCSS</li>
              <li>BEM methodology</li>
              <li>Flexbox</li>
              <li>RWD</li>
              <li>Mobile first approach</li>
            </ul>
            <p>Go to:</p>
            <LinkContainer>
              <LinkItem
                href="https://lukaszkus.github.io/huddle-landing-page"
                color="#674baf"
              >
                Live site
              </LinkItem>
              <LinkItem
                href="https://github.com/lukaszkus/huddle-landing-page"
                color="#674baf"
              >
                Github repository
              </LinkItem>
            </LinkContainer>
          </TextItem>
        </Grid>
      </Section>

      <Section bgColor="#7d82e4" data-aos="fade-up">
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
              depending on their device's screen size and see hover states for
              all interactive elements on the page.
            </p>
            <p>Build with:</p>
            <ul>
              <li>Semantic HTML5 markup</li>
              <li>SCSS</li>
              <li>Vanilla JS</li>
              <li>BEM methodology</li>
              <li>Flexbox</li>
              <li>RWD</li>
              <li>Mobile first approach</li>
            </ul>
            <p>Go to:</p>
            <LinkContainer>
              <LinkItem
                href="https://lukaszkus.github.io/pricing-component"
                color="#f6f6fe"
              >
                Live site
              </LinkItem>
              <LinkItem
                href="https://github.com/lukaszkus/pricing-component"
                color="#f6f6fe"
              >
                Github repository
              </LinkItem>
            </LinkContainer>
          </TextItem>
          <ImageItem data-aos="fade-up">
            <img
              src="../images/fm/fm-pricing-component.png"
              alt="Pricing component"
            />
          </ImageItem>
        </Grid>
      </Section>

      <Section data-aos="fade-up">
        <Grid>
          <ImageItem data-aos="fade-up">
            <img
              src="../images/fm/fm-time-tracking-dashboard.png"
              alt="Time tracking dashboard"
            />
          </ImageItem>
          <TextItem
            color="#1c1f4a"
            bgColor="rgba(255, 255, 255, 0.2)"
            data-aos="fade-up"
          >
            <h3>Time tracking dashboard</h3>
            <p>
              Dashboard layout build with CSS Grid. The data is pull from local
              <i> data.json</i> file.
              <br />
              Users are able to: switch between viewing Daily, Weekly, and
              Monthly stats, see hover states for all interactive elements on
              the page and view the optimal layout for the site depending on
              their device's screen size.
            </p>
            <p>Build with:</p>
            <ul>
              <li>Semantic HTML5 markup</li>
              <li>SCSS</li>
              <li>Vanilla JS</li>
              <li>BEM methodology</li>
              <li>CSS Grid</li>
              <li>Flexbox</li>
              <li>RWD</li>
              <li>Mobile first approach</li>
            </ul>
            <p>Go to:</p>
            <LinkContainer>
              <LinkItem
                href="https://lukaszkus.github.io/time-tracking-dashboard"
                color="#1c1f4a"
              >
                Live site
              </LinkItem>
              <LinkItem
                href="https://github.com/lukaszkus/time-tracking-dashboard"
                color="#1c1f4a"
              >
                Github repository
              </LinkItem>
            </LinkContainer>
          </TextItem>
        </Grid>
      </Section>

      <Section bgColor="#559ca1" data-aos="fade-up">
        <Grid>
          <TextItem
            color="#f2f2f2"
            bgColor="rgba(255, 255, 255, 0.1)"
            data-aos="fade-up"
          >
            <h3>3 column component</h3>
            <p>
              Simple, responsive column component. Users are able to: view the
              optimal layout for the site depending on their device's screen
              size and see hover states for all interactive elements on the
              page.
            </p>
            <p>Build with:</p>
            <ul>
              <li>Semantic HTML5 markup</li>
              <li>SCSS</li>
              <li>BEM methodology</li>
              <li>Flexbox</li>
              <li>RWD</li>
              <li>Mobile first approach</li>
            </ul>
            <p>Go to:</p>
            <LinkContainer>
              <LinkItem
                href="https://lukaszkus.github.io/3-column-component"
                color="#f2f2f2"
              >
                Live site
              </LinkItem>
              <LinkItem
                href="https://github.com/lukaszkus/3-column-component"
                color="#f2f2f2"
              >
                Github repository
              </LinkItem>
            </LinkContainer>
          </TextItem>
          <ImageItem data-aos="fade-up">
            <img
              src="../images/fm/fm-3-column-component.png"
              alt="3 column component"
            />
          </ImageItem>
        </Grid>
      </Section>
    </>
  );
}

export default FrontendMentor;
