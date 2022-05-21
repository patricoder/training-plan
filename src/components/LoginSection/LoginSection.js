import { LoginAndRegisterStructure } from "../../common-components";
import LoginForm from "./LoginForm";
const LoginSection = () => {
    return (
       <LoginAndRegisterStructure formComponent={<LoginForm/>} title="Login"/>
    );
};

export default LoginSection;