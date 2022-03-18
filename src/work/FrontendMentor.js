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
  z-indx: 9999;
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
  }

  @media ${breakpoint.desktop} {
    padding-inline: 4rem;
  }
`;

const TextItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  }

  li {
    font-size: 0.875rem;
    font-weight: 300;
  }

  @media ${breakpoint.tablet} {
    align-items: flex-start;
    text-align: left;
    padding-inline: 2rem;
  }

  @media ${breakpoint.desktop} {
    padding-inline: 4rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Btn = styled.a.attrs((props) => ({
  href: props.href,
}))`
  border: 1px solid ${(props) => props.mainColor};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: ${(props) => props.mainColor};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: ${(props) => props.mainColor};
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
                  <a href={project.links.github}>Github</a>
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
          <TextItem color="#935653" data-aos="fade-up">
            <h3>Base Apparel comming soon page</h3>
            <p>
              A great project to practice responsive layout building and simple
              form validation.
              <br />
              Users are able to view the optimal layout depending on their
              device's screen size, see hover states for all interactive
              elements, receive an error message when the form is submitted.
            </p>
            <ul>
              Build with:
              <li>Semantic HTML5 markup</li>
              <li>SCSS</li>
              <li>Vanilla JS</li>
              <li>BEM methodology</li>
              <li>Flexbox</li>
              <li>Mobile first approach</li>
            </ul>
            <BtnContainer>
              <Btn
                href="https://lukaszkus.github.io/base-apparel-coming-soon/"
                mainColor="#935653"
                hoverColor="#fff2f2">
                View live site
              </Btn>
              <Btn
                href="https://github.com/lukaszkus/base-apparel-coming-soon"
                mainColor="#935653"
                hoverColor="#fff2f2">
                View code
              </Btn>
            </BtnContainer>
          </TextItem>
        </Grid>
      </Section>

      <Section data-aos="fade-up">
        <Grid>
          <TextItem data-aos="fade-up">
            <h3>Easybank landing page</h3>
            <p>
              The application is built with the Mobile First approach and RWD
              (Responisve Web Design) method that enables web to fit the screens
              of different devices automatically.
            </p>
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
          <TextItem color="#fff" data-aos="fade-up">
            <h3>Social media dashboard</h3>
            <p>
              The application is built with the Mobile First approach and RWD
              (Responisve Web Design) method that enables web to fit the screens
              of different devices automatically.
            </p>
          </TextItem>
        </Grid>
      </Section>

      <Section bgColor="#b2c1eb" data-aos="fade-up">
        <Grid>
          <TextItem data-aos="fade-up">
            <h3>Order summary component</h3>
            <p>
              It is a simple component build to practice layout skills.
              <br /> Users should be able to see hover states for interactive
              elements.
            </p>
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
          <TextItem data-aos="fade-up">
            <h3>Huddle landing page</h3>
            <p>
              The application is built with the Mobile First approach and RWD
              (Responisve Web Design) method that enables web to fit the screens
              of different devices automatically.
            </p>
          </TextItem>
        </Grid>
      </Section>

      <Section bgColor="#7d82e4" data-aos="fade-up">
        <Grid>
          <TextItem color="#fff" data-aos="fade-up">
            <h3>Pricing component</h3>
            <p>
              The application is built with the Mobile First approach and RWD
              (Responisve Web Design) method that enables web to fit the screens
              of different devices automatically.
            </p>
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
          <TextItem data-aos="fade-up">
            <h3>Time tracking dashboard</h3>
            <p>
              The application is built with the Mobile First approach and RWD
              (Responisve Web Design) method that enables web to fit the screens
              of different devices automatically.
            </p>
          </TextItem>
        </Grid>
      </Section>

      <Section bgColor="#559ca1" data-aos="fade-up">
        <Grid>
          <TextItem color="#fff" data-aos="fade-up">
            <h3>3 column component</h3>
            <p>
              The application is built with the Mobile First approach and RWD
              (Responisve Web Design) method that enables web to fit the screens
              of different devices automatically.
            </p>
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
