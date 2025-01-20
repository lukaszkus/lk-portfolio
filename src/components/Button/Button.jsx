import { Btn } from "./Button.style";

const Button = ({ label, click, children, size, name }) => {
  return (
    <Btn onClick={click} size={size} aria-labelledby={name}>
      {children}
      {label}
    </Btn>
  );
};

export default Button;
