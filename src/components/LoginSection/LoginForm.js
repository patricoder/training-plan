import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');    
    return (
       <div>
           login form here
       </div>
    );
};

export default LoginForm;