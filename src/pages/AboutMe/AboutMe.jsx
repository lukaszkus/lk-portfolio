import { motion } from "framer-motion";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import { Divider, Heading } from "../../components";

import { Wrapper } from "./AboutMe.style";

const AboutMe = ({ titlePrefix, titleSuffix }) => {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <Heading title="About me" />
        <Divider />
      </Wrapper>
    </motion.div>
  );
};

export default AboutMe;
