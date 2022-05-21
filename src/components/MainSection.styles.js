import styled from "styled-components";
import SectionContainer from '../styles/StyledElements/SectionContainer'
import SectionTitle from "../styles/StyledElements/Title";
import FlexContainer from "../styles/StyledElements/FlexContainer";

const Section = styled.div`
  width: 100%;
  height: 100%;
  color: ${({theme})=>theme.colors.white};
`;
const Container = styled(SectionContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Title = styled(SectionTitle)`
  margin-bottom: 2rem;
`;

const LogoContainer = styled(FlexContainer)(
  ({theme})=> `
    background-color: ${ theme.colors.white};
    border-radius: ${theme.radiusValue.radius};
    color: ${ theme.colors.mainColor};
    margin-bottom: 2rem;
    width: 5rem;
    height: 5rem;
    .faDumbell {
      font-size: ${ theme.fontSize.font_28};
      transform: rotate(-20deg);
    }
`
);

const SubTitle = styled.p(
  ({ theme }) => `
    font-size: ${theme.fontSize.font_21};
    font-weight: ${theme.fontWeight.font_weightLight}
    `
);

const ButtonsContainer = styled(FlexContainer)`
  width: 100%;
  flex-direction: column;
  margin: 5rem 0;
  .nav-link {
    margin-bottom: 1.5rem;
    width: 100%;
    button {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;



export { Section, Container, Title, LogoContainer, SubTitle, ButtonsContainer };