import { Wrapper, Content, Title } from "./Heading.style";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Heading = ({ title }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        ...transition,
        delay: 0.2,
      },
    },
  };

  const heading = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ...transition } },
  };

  return (
    <Wrapper>
      <Content
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        exit="hidden"
      >
        <Title variants={heading}>{title}</Title>
      </Content>
    </Wrapper>
  );
};

export default Heading;
