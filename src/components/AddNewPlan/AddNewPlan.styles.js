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

const Row = styled.div`
    margin: 2rem 0;
`;

const Span = styled.span``;

const Select = styled.select``;
const Option = styled.option``;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div` 
  display: flex;
    &.your-choises {  
      flex-direction: column;
    }
    &.select-container {
      justify-content: space-around;
    .label-inner {
      position: relative;
      text-transform: uppercase;
      .input-radio {
        position: absolute;
        opacity: 1;
        cursor: pointer;
      }
      .custom-radio {
        position: absolute;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        left:-2rem;
        background-color: ${({theme})=>theme.colors.white};
        &:after {
          position: absolute;
          content: "";
          width: 1.5rem;
          height: 1.5rem;
          background-color: ${({theme})=>theme.colors.white};
          border-radius: 50%;
          transform: translate(-50%, -50%);
          top:50%;
          left: 1.5rem;
        }
      }
      .input-radio:checked > .custom-radio::after {
        background-color: ${({theme})=>theme.colors.mainColor};
      }
    }
  }
`;

const InputTitle = styled.p`
    text-transform: uppercase;
    font-size: ${({theme})=>theme.fontSize.font_21};
    font-weight: ${({theme})=>theme.fontWeight.font_weightSemiBold};
    margin-bottom: 1.5rem;
`;

const Input = styled.input`
    padding: .5rem;
    background: transparent;
    outline: none;
    border: none;
    border-bottom: .1rem solid white;
    color: white;
`;

 

export { Container, Title, InputsContainer, InputContainer, InputTitle,Input, Row, Span, Select, Option };
