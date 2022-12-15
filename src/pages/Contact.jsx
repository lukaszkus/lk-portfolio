import { motion } from "framer-motion";

import { GetInTouch } from "../components";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <GetInTouch />
    </motion.div>
  );
}

export default Contact;
