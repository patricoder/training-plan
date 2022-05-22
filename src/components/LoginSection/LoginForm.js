import { useState } from "react";
import { Button } from "../../common-components";
import {
  InputsWrapper,
  InputBox,
  Input,
  InputTitle,
  Form
} from "./LoginSection.styles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
    // error state if error set "input-error"
  const fromSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0 || !email.includes("@")) {
        setError(true);
    } else {
        setError(false);

    }
  };

  return (
    <InputsWrapper>
      <Form onSubmit={fromSubmit}>
        <InputBox className={error && "input-error"}>
          <InputTitle>Email</InputTitle>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          
        </InputBox>

        <InputBox  className={error && "input-error"}>
          <InputTitle>Password</InputTitle>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </InputBox>
        <Button title="Login" />
      </Form>
    </InputsWrapper>
  );
};

export default LoginForm;
