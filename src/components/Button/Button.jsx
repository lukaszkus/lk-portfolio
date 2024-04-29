import { Btn } from "./Button.style";

const Button = ({ label, click, children, size }) => {
  return (
    <Btn onClick={click} size={size}>
      {children}
      {label}
    </Btn>
  );
};

export default Button;
