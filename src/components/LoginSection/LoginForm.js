import { useState } from "react";
import { Button } from "../../common-components";
import {
  InputsWrapper,
  InputBox,
  Input,
  InputTitle,
  Form
} from "../../styles/StyledElements/LoginAndRegister.styles";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const auth = getAuth(app);
  const navigate = useNavigate();

    // error state if error set "input-error"
  const fromSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0 || !email.includes("@")) {
        setError(true);
    } else {
        setError(false);
        signInWithEmailAndPassword (auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate('/protected/' + user.uid);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
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

      <NavLink to="/register" className="nav-link">
          <InputTitle>Dont have an account?</InputTitle>
      </NavLink>
    </InputsWrapper>
  );
};

export default LoginForm;
