import { motion } from "framer-motion";

import { Portfolio } from "../components";

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Portfolio />
    </motion.div>
  );
}

export default Work;
