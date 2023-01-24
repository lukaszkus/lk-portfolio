import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";

import { Portfolio } from "../components";

function Work({ titlePrefix, titleSuffix }) {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Portfolio />
    </motion.div>
  );
}

export default Work;
