import { Link } from "react-scroll";
import styled from "styled-components";
import breakpoint from "../utils/breakpoints";
import portfolioItems from "../utils/portfolioItems";

import chevron from "../assets/chevron.svg";
// import icon from "../assets/mobile-first.svg";

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
  object-fit: cover;
  // z-index: 1;
  transform: translateY(${(props) => props.offset / 4}px);
`;

const Arrow = styled.img.attrs({
  src: `${chevron}`,
})`
  position: absolute;
  bottom: 30px;
  left: calc(50% - (30px / 2));
  // transform: translate(-50%);
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

  &:first-of-type {
    padding-bottom: 0;
  }
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
  gap: 2rem;

  @media ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media ${breakpoint.desktop} {
    gap: 4rem;
    // padding: 2rem 0;
  }
`;

const ImageItem = styled.figure`
  display: grid;
  place-items: center;
  img {
    width: 100%;
    height: auto;
    // filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.5));
  }
  figcaption {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 0;
  }
`;

const TextItem = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
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

  @media ${breakpoint.tablet} {
    align-items: flex-start;
    text-align: left;
  }
`;

// const Icon = styled.img.attrs((props) => ({
//   src: props.icon,
//   alt: props.alt,
// }))`
//   width: 100%;
//   height: auto;
//   padding-top: 1rem;

//   @media ${breakpoint.tablet} {
//     width: 80%;
//   }
// `;

function WildnSlow({ offset }) {
  const item = portfolioItems[1];
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
            </List>
          </Description>
        </Container>
      </Section>

      <Section>
        <Grid>
          <ImageItem data-aos="fade-up">
            <img src="../images/wns/wns-tag.jpg" alt="Label" />
            <figcaption>Label</figcaption>
          </ImageItem>
          <ImageItem data-aos="fade-up">
            <img src="../images/wns/wns-box.jpg" alt="Bos sticker" />
            <figcaption>Box sticker</figcaption>
          </ImageItem>
        </Grid>
      </Section>

      <Section bgColor={bgColor} data-aos="fade-up">
        <Container>
          <Grid>
            <TextItem data-aos="fade-up">
              <h3>Badges</h3>
              <p>
                The application is built with the Mobile First approach and RWD
                (Responisve Web Design) method that enables web to fit the
                screens of different devices automatically.
              </p>
            </TextItem>
          </Grid>
          <ImageItem data-aos="fade-up">
            <img src="../images/wns/wns-badges.png" alt="Badges" />
          </ImageItem>
        </Container>
      </Section>
    </>
  );
}

export default WildnSlow;
