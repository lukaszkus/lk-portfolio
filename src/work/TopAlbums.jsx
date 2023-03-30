import { motion } from "framer-motion";

import { COLORS, images, portfolioItems } from "../utils";
import { OuterLink } from "../subcomponents";

import {
  Wrapper,
  Content,
  Description,
  Grid,
  Heading,
  HeroImg,
  ImageItem,
  List,
} from "./WorkPage.style";

import { Divider, PortfolioNav } from "../components";

function TopAlbums({ id }) {
  const item = portfolioItems.find((item) => item.id === id);
  const { title, category, project, cover } = item;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Content>
          <HeroImg>
            <img src={cover} alt={`${title} - ${category}`} />
          </HeroImg>
        </Content>
        <Wrapper>
          <Content>
            <Heading>
              <h1>{title}</h1>
              <h2>{category}</h2>
            </Heading>
            <Description>
              <div>
                <p>{project.description}</p>
                <p>{project.details}</p>
              </div>

              <List>
                <ul>
                  <p>My role:</p>
                  {project.role.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <ul>
                  <p>Technology used:</p>
                  {project.technology.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {/* <ul>
                  <p>Tools:</p>
                  {project.tools.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul> */}
                <ul>
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
          </Content>
        </Wrapper>
        <Divider />
        <Wrapper>
          <Content>
            <Grid>
              <ImageItem>
                <img src={images.ta_brand_01} alt="Top Albums logo" />
              </ImageItem>
            </Grid>
          </Content>
        </Wrapper>
      </motion.div>
      <Divider label="Go to project" />
      <PortfolioNav id={id} />
    </>
  );
}

export default TopAlbums;
