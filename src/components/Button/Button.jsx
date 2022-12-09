import { Btn } from "./StyledButton";

const Button = ({ label, click }) => {
  return <Btn onClick={click}>{label}</Btn>;
};

export default Button;
