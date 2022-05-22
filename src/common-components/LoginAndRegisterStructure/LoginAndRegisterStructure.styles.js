import styled from "styled-components";
import FlexContainer from "../../styles/StyledElements/FlexContainer";
import SectionContainer from "../../styles/StyledElements/SectionContainer";
import SectionTitle from "../../styles/StyledElements/Title";

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
`;

const Container = styled(SectionContainer)`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: flex-start;
   height: 100%;
  .nav-item {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSize.font_43};
    font-weight: ${({ theme }) => theme.fontWeight.font_weightLight};
  }
`;

const TitleContainer = styled.div`
`;

const Title = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.mainColor};
  margin-bottom: 1rem;
`;

const FormContainer = styled(FlexContainer)`
  width: 100%;
`;

const SubTitle = styled.p(
  ({ theme }) => `
        color: ${theme.colors.gray};
        font-size: ${theme.fontSize.font_21};
        font-weight: ${theme.fontWeight.font_weightMedium};
        margin-bottom: 5rem;
    `
);
export { Section, Container, TitleContainer, Title, SubTitle, FormContainer };
