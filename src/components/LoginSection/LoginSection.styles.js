import styled from "styled-components";
import { InputWrapper } from "../../styles/StyledElements/InputField";

const InputsWrapper = styled.div`
    width: 100%;
`
const InputBox = styled(InputWrapper)`
    width: 100%;
    margin-bottom: 3rem;
`;

const InputTitle = styled.p(
    ({theme}) => `
        color: ${theme.colors.gray};
        font-size: ${theme.fontSize.font_16};
    `
);

const Input = styled.input``;

export { InputBox, InputsWrapper, Input, InputTitle }
