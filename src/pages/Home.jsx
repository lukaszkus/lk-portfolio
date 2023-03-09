import { motion } from "framer-motion";
import useDocumentTitle from "../hooks/useDocumentTitle";

import { Header, Portfolio } from "../components";

function Home({ titleSuffix }) {
  useDocumentTitle(`${titleSuffix}`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Portfolio />
    </motion.div>
  );
}

export default Home;
