import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";

import { GetInTouch } from "../components";

function Contact({ titlePrefix, titleSuffix }) {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GetInTouch />
    </motion.div>
  );
}

export default Contact;
