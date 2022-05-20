import {
  Section,
  Container,
  Title,
  LogoContainer,
  SubTitle,
  ButtonsContainer,
} from "./MainSection.styles";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



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
        
        </ButtonsContainer>
      </Container>
    </Section>
  );
};

export default WelcomePage;