import { Btn } from "./StyledButton";

const Button = ({ label, click, children, size }) => {
  return (
    <Btn onClick={click} size={size}>
      {children}
      {label}
    </Btn>
  );
};

export default Button;
