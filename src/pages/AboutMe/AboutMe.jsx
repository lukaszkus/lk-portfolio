import { motion } from "framer-motion";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import {
  // Divider,
  Heading,
} from "../../components";
import { Wrapper, Content } from "./AboutMe.style";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

// const subtitle = {
//   hidden: { y: 20, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { ...transition } },
// };

const AboutMe = ({ titlePrefix, titleSuffix }) => {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Wrapper>
        <Content>
          <Heading title="About me" />
          {/* <motion.p variants={subtitle} initial="hidden" animate="show" exit="hidden">
            text.
          </motion.p> */}
        </Content>
        {/* <Divider /> */}
        {/* <Content></Content> */}
      </Wrapper>
    </motion.div>
  );
};

export default AboutMe;
