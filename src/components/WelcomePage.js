import {
  Section,
  Container,
  Title,
  LogoContainer,
  SubTitle,
  ButtonsContainer,
} from "./MainSection.styles";
import { Button } from "../common-components";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";



const WelcomePage = () => {
  return (
    <Section>
      <Container>
        <LogoContainer>
          <FontAwesomeIcon icon={faDumbbell} className="faDumbell" />
        </LogoContainer>
        <Title>Welcome</Title>
        <SubTitle>First step</SubTitle>
        <SubTitle>To make your body healthier</SubTitle>
        <ButtonsContainer>
          <NavLink to="/login" className="nav-link">
            <Button title="Login" btnStyle="primary" />
          </NavLink>
          <NavLink to="/register" className="nav-link">
            <Button title="Register" />
          </NavLink>
        </ButtonsContainer>
      </Container>
    </Section>
  );
};

export default WelcomePage;