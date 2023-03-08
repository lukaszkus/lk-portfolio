import { Wrapper, Content } from "./Divider.style";

const Divider = ({ label }) => {
  return (
    <Wrapper>
      <Content>
        {label && <p className="label">{label}</p>}
        <div className="line"></div>
      </Content>
    </Wrapper>
  );
};

export default Divider;
