import {
  // Wrapper,
  // Content,
  Title,
} from "./Heading.style";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const heading = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ...transition } },
};

const Heading = ({ title }) => {
  return (
    <Title variants={heading} initial="hidden" animate="show" viewport={{ once: true }} exit="hidden">
      {title}
    </Title>
  );
};

export default Heading;
