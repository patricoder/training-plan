import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { useState } from "react";
import { Button } from "../../common-components";
import {
  InputsWrapper,
  InputBox,
  Input,
  InputTitle,
  Form,
} from "../../styles/StyledElements/LoginAndRegister.styles";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("a");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(false);
  const auth = getAuth(app);

  // error state if error set "input-error"
  const fromSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0 || !email.includes("@")) {
      setError(true);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
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

        <InputBox className={error && "input-error"}>
          <InputTitle>Password</InputTitle>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </InputBox>

        <InputBox className={error && "input-error"}>
          <InputTitle>Password</InputTitle>
          <Input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.currentTarget.value)}
          />
        </InputBox>
        <Button
          title="Register"
          btnDisabled={password !== repeatPassword && true}
        />
      </Form>
    </InputsWrapper>
  );
};

export default RegisterForm;
