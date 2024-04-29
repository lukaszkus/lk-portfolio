import React from "react";

import { Wrapper, Grid, Icon, IconImg } from "./Stack.style";

import { stackIcons } from "../../utils/stackIcons";
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ...transition,
    },
  },
};

const ico = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ...transition } },
};

const Stack = () => {
  return (
    <Wrapper>
      <Grid
        variants={container}
        initial="hidden"
        whileInView="show"
        exit="hidden"
        viewport={{ once: true }}
      >
        {stackIcons.map((icon, index) => (
          <Icon key={index} variants={ico} whileInView="show">
            <IconImg src={icon.src} title={icon.name} alt={icon.name} />
          </Icon>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Stack;
