import styled from "styled-components";
import errorLogo from "../../assets/close.png";

const InputWrapper = styled.div`
    width: 100%;
    & > p {
        margin-bottom: .5rem;
    }
    & > input { 
        position: relative;
        border: none;
        border-bottom: 2px solid ${({theme})=>theme.colors.gray};
        width: 100%;
        padding: .5rem 1rem;
        outline: none;
        &:focus {
            border-color: ${({theme})=>theme.colors.mainColor};
        }
    }

    &.input-error {
        position: relative;
         & > input {
            border-color: red;
         }

         & > p {
             color: red;
         }

         &:after {
                position: absolute;
                content:'';
                width: 20px;
                height: 20px;
                right: 0;
                top: 50%;
                background-image: url(${errorLogo});
                background-size: contain;
            }
    }


`

export { InputWrapper } ;