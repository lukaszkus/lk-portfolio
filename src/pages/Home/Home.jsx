import { motion } from "framer-motion";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import { Divider, Header, Portfolio } from "../../components";

const Home = ({ titleSuffix }) => {
  useDocumentTitle(`${titleSuffix}`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Divider label="Latest projects" />
      <Portfolio />
    </motion.div>
  );
};

export default Home;
