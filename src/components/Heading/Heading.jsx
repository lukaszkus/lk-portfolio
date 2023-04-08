import { Wrapper, Content, Title } from "./Heading.style";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Heading = ({ title }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
        ...transition,
        delay: 0.2,
      },
    },
  };

  return (
    <Wrapper>
      <Content
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
};

export default Heading;
