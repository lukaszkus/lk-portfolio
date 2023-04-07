import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";

import { Contact } from "../components";

const ContactPage = ({ titlePrefix, titleSuffix }) => {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
