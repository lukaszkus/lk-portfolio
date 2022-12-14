import { Btn } from "./StyledButton";

const Button = ({ label, click, children }) => {
  return (
    <Btn onClick={click}>
      {children}
      {label}
    </Btn>
  );
};

export default Button;
