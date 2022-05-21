import { LoginAndRegisterStructure } from "../../common-components";
import RegisterForm from "./RegisterForm";

const RegisterSection = () => {
  return (
    <LoginAndRegisterStructure
      formComponent={<RegisterForm />}
      title="Register"
    />
  );
};

export default RegisterSection;
