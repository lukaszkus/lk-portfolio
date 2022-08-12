import styled from "styled-components";
import { motion } from "framer-motion";

import { Header, Portfolio, Contact } from "../components";

const Main = styled.main``;

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Header />
      <Main>
        <Portfolio />
        <Contact />
      </Main>
    </motion.div>
  );
}

export default Home;
