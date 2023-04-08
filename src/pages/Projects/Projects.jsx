import { motion } from "framer-motion";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import { Divider, Portfolio } from "../../components";

import { Wrapper } from "./Projects.style";

const Projects = ({ titlePrefix, titleSuffix }) => {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Wrapper>
        <Divider label="Projects" />
        <Portfolio />
      </Wrapper>
    </motion.div>
  );
};

export default Projects;
