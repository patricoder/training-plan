import { Container, FormContainer, Section, SubTitle, Title, TitleContainer } from "./LoginAndRegisterStructure.styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../";
import { NavLink } from "react-router-dom";

const LoginAndRegisterStructure = ({formComponent, title}) => {
  return (
    <Section>
      <Container>
        <NavLink to="/" className="nav-link">
          <FontAwesomeIcon icon={faArrowLeft} className="nav-item" />
        </NavLink>
        <TitleContainer>
          <Title>{title}</Title>
          <SubTitle>{title} first to continue</SubTitle>
        </TitleContainer>
        <FormContainer>{formComponent}</FormContainer>
      </Container>
    </Section>
  );
};

export default LoginAndRegisterStructure;
