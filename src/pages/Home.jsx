import { motion } from "framer-motion";

import { Header } from "../components";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Header />
    </motion.div>
  );
}

export default Home;
