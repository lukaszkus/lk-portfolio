import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { Wrapper, Content, Image, Emoji } from "./Avatar.style";

import IMAGES from "../../utils/images";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const container = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ...transition,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      ...transition,
    },
  },
};

const imgVars = {
  initial: {
    x: -1000,
    opacity: 0,
    scale: 0.7,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 20 },
      opacity: { duration: 0.6 },
    },
  },
  exit: {
    x: 1000,
    opacity: 0,
    scale: 0.7,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 20 },
      opacity: { duration: 0.6 },
    },
  },
};

const iconVars = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 500, damping: 10 },
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      y: { type: "spring", stiffness: 500, damping: 10 },
      opacity: { duration: 0.3 },
    },
  },
};

const initialIndex = 0;

const Avatar = () => {
  const [index, setIndex] = useState(initialIndex);

  const images = [IMAGES.me_1, IMAGES.me_2, IMAGES.me_3];
  const imgAlts = ["My photo where I'm smiling", "My photo where I'm proud", "A photo of me doing the rock on gesture"];

  const icons = [
    { name: "Waving hand", icon: "👋" },
    { name: "Smiling face", icon: "😎" },
    { name: "Rock on", icon: "🤘" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index === images.length - 1) {
        return setIndex(0);
      }
      setIndex(index + 1);
    }, 3600);

    return () => clearInterval(intervalId);
  }, [index, images.length]);

  return (
    <Wrapper variants={container} initial="initial" animate="animate" exit="exit">
      <Content>
        <AnimatePresence initial={true}>
          <Image variants={imgVars} animate="animate" initial="initial" exit="exit" src={images[index]} alt={imgAlts[index]} key={images[index]} />
        </AnimatePresence>
        <Image src={IMAGES.me_black} alt="" />
      </Content>
      <Image src={IMAGES.me_shadow} alt="" />
      <Emoji variants={iconVars} animate="animate" initial="initial" exit="exit" key={images[index]}>
        <span role="img" aria-label={icons[index].name}>
          {icons[index].icon}
        </span>
      </Emoji>
    </Wrapper>
  );
};

export default Avatar;
