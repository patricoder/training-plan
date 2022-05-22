import { useState } from "react";
import { InputsWrapper, InputBox, Input, InputTitle} from "./LoginSection.styles";

const LoginForm = () => {
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');    
    return (
       <InputsWrapper>
            <InputBox>
                <InputTitle>Email</InputTitle>
                <Input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
            </InputBox>

            <InputBox>
                <InputTitle>Password</InputTitle>
                <Input type="password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
            </InputBox>
       </InputsWrapper>
    );
};

export default LoginForm;