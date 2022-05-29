import styled from "styled-components";
import SectionTitle from "../../styles/StyledElements/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  color: ${({theme})=>theme.colors.white};
`;

const Title = styled(SectionTitle)`
  text-transform: uppercase;
`;

const InputsContainer = styled.div`
`;

const InputContainer = styled.div`
    margin-bottom: 2rem;
`;

const InputTitle = styled.p`
    text-transform: uppercase;

`;

const Input = styled.input`
    padding: .5rem;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: .1rem solid white;
    color: white;
`;

 

export { Container, Title, InputsContainer, InputContainer, InputTitle,Input };
