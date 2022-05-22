import { Btn } from "./Button.styles";

const Button = ({ title, btnStyle, btnType, btnAction, btnDisabled }) => {
  return (
    <Btn type={btnType} abc={btnStyle} onClick={btnAction} disabled={btnDisabled}>
      {title}
    </Btn>
  );
};

export default Button;