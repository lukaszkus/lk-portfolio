import useDocumentTitle from "../hooks/useDocumentTitle";
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
  // ScrollY,
} from "./WorkPage.style";

import { Divider, PortfolioNav } from "../components";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const InspirationWay = ({ id, titlePrefix, titleSuffix }) => {
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
            <motion.img
              src={cover}
              variants={child}
              // alt={title}
              alt={`${title} - ${category}`}
            />
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
                  <p>Tools:</p>
                  {project.tools.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </motion.ul>
                <motion.ul variants={child}>
                  <p>Links:</p>
                  <li>
                    <OuterLink href={project.links.liveSite} icon="liveSite" text="Live site" width="20px" height="20px" color={COLORS.accentPrimary} />
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
              {[images.iw_desktop_home, images.iw_desktop_about, images.iw_desktop_services, images.iw_desktop_contact].map((image, index) => (
                <ImageItem key={index} variants={child} whileInView="show" viewport={{ once: true }}>
                  <img src={image} alt="Desktop" loading="lazy" />
                </ImageItem>
              ))}
            </Grid>
          </Content>
        </Wrapper>
      </motion.div>
      <Divider label="Go to project" />
      <PortfolioNav id={id} />
    </>
  );
};

export default InspirationWay;
