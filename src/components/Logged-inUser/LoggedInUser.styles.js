import styled from "styled-components";
import SectionContainer from "../../styles/StyledElements/SectionContainer";

const Section = styled.section`
  width: 100%;
  height: 100%;
  color: white;
`;

const Container = styled(SectionContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const NavContainer = styled.div`
  border-radius: 5px;
  padding: 5px 0;
  background-color: white;
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  .nav-link {
    display: flex;
    flex-direction: column;
    color: ${({theme})=>theme.colors.gray};
    .nav-icon {
      padding: .5rem
    }
    &:hover {
      .nav-icon, p {
        color: ${({theme})=>theme.colors.mainColor}
      }
    }
  }
`;
const NavTitle = styled.p(
  ({theme}) => `
    text-transform: uppercase;
    font-size: ${theme.fontSize.font_12};
  `
);

export { Section, Container, NavContainer, NavTitle };
