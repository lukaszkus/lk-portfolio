import useDocumentTitle from "../hooks/useDocumentTitle";
import { motion } from "framer-motion";

import { images, portfolioItems } from "../utils";
import { OuterLink } from "../subcomponents";

import { Wrapper, Content, Description, Grid, Heading, HeroImg, ImageItem, List, TextItem, LinkContainer } from "./WorkPage.style";

import { Divider, PortfolioNav } from "../components";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const RichMedia = ({ id, titlePrefix, titleSuffix }) => {
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
        <Content>
          <HeroImg variants={container} initial="hidden" animate="show">
            <motion.img src={cover} variants={child} alt={`${title} - ${category}`} />
            <div></div>
          </HeroImg>
        </Content>

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
                  <li>Look into specific project below</li>
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
                <img src={images.rm_renault} alt="Renault Aftersales" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Renault Aftersales</h3>
                <LinkContainer>
                  <OuterLink href="https://prev.sataku.com/campaign/901/7" icon="liveSite" text="Live" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.rm_taniey} alt="Taniey Xmas" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Taniey Xmas</h3>
                <LinkContainer>
                  <OuterLink href="https://prev.sataku.com/campaign/945/7" icon="liveSite" text="Live" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.rm_mattel} alt="Break The Egg - Minigame" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Break The Egg - Minigame</h3>
                <LinkContainer>
                  <OuterLink href="https://break-the-egg.netlify.app/" icon="liveSite" text="Live" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.rm_ferrerorocher} alt="Ferrero Rocher" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Ferrero Rocher</h3>
                <LinkContainer>
                  <OuterLink href="https://prev.sataku.com/campaign/887/7" icon="liveSite" text="Live" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.rm_tefal} alt="Tefal Optigrill" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Tefal Optigrill</h3>
                <LinkContainer>
                  <OuterLink href="https://prev.sataku.com/campaign/756/7" icon="liveSite" text="Live" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.rm_lot} alt="Lot - Journey wheel" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Lot - Journey wheel</h3>
                <LinkContainer>
                  <OuterLink href="https://prev.sataku.com/campaign/844/7" icon="liveSite" text="Live" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.rm_bugatti} alt="Bugatti - Eleganza | Bella Donna" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Bugatti - Eleganza | Bella Donna</h3>
                <LinkContainer>
                  <OuterLink href="https://prev.sataku.com/campaign/521/7" icon="liveSite" text="Live" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.rm_ssangyong} alt="Ssang Yong Actyon" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Ssang Yong Actyon</h3>
                <LinkContainer>
                  <OuterLink href="https://prev.sataku.com/campaign/845/7" icon="liveSite" text="Live" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>

        <Divider />

        <Wrapper>
          <Content>
            <Grid variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <ImageItem variants={child}>
                <img src={images.rm_kinder} alt="Kinder Chocolate" />
              </ImageItem>
              <TextItem variants={child}>
                <h3>Kinder Chocolate</h3>
                <LinkContainer>
                  <OuterLink href="https://prev.sataku.com/campaign/441/7" icon="liveSite" text="Live" width="20px" height="20px" />
                </LinkContainer>
              </TextItem>
            </Grid>
          </Content>
        </Wrapper>
      </motion.div>
      <Divider label="Go to project" />
      <PortfolioNav id={id} />
    </>
  );
};

export default RichMedia;
