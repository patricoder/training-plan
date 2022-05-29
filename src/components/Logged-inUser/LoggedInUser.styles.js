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
const OutletContainer = styled.div`
  height: 100%;
`;

const NavContainer = styled.div`
  box-shadow: 1px -8px 50px 21px rgba(0,0,0,0.1);
  padding: 5px 0;
  background-color: white;
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  .nav-link {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.gray};
    .nav-icon {
      padding: 0.5rem;
    }
    &:hover {
      .nav-icon,
      p {
        color: ${({ theme }) => theme.colors.mainColor};
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

export {
  Section,
  Container,
  OutletContainer,
  NavContainer,
  NavTitle,
};
