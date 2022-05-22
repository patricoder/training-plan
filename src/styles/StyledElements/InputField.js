import styled from "styled-components";

const InputWrapper = styled.div`
    width: 100%;
    & > p {
        margin-bottom: .5rem;
    }

    & > input { 
        border: none;
        border-bottom: 2px solid ${({theme})=>theme.colors.gray};
        width: 100%;
        padding: .5rem 1rem;
        outline: none;
        &:focus {
            border-color: ${({theme})=>theme.colors.mainColor};
        }
    }
`

export { InputWrapper } ;