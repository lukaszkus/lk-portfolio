import { motion } from "framer-motion";
import { Wrapper, Content } from "./Divider.style";

const Divider = ({ label }) => {
  return (
    <Wrapper>
      <Content>
        {label && (
          <motion.p
            className="label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                ease: "easeInOut",
                delay: 0.2,
                duration: 0.8,
              },
            }}
            exit={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
          >
            {label}
          </motion.p>
        )}
        <motion.div
          className="line"
          initial={{ scaleX: 0 }}
          whileInView={{
            scaleX: 1,
            transition: {
              ease: "easeInOut",
              delay: 0.4,
              duration: 0.4,
            },
          }}
          exit={{ scaleX: 0 }}
          viewport={{ once: true }}
        ></motion.div>
      </Content>
    </Wrapper>
  );
};

export default Divider;
