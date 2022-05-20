import styled from "styled-components";

const imageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        display: block;
        max-width: 100%;
        max-height: 100%;
    }
`;

export default imageContainer ;