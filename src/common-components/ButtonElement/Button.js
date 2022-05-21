import { Btn } from "./Button.styles";

const Button = ({ title, btnStyle }) => {
  return (
    <Btn abc={btnStyle}>
      {title}
    </Btn>
  );
};

export default Button;