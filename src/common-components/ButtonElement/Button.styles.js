import styled from "styled-components"

const Btn = styled.button(
  ({ theme, abc }) => `
    width: 100%;
    padding: 2rem 0;
    border: none;
    border: 1px solid transparent;
    border-radius: ${theme.radiusValue.radius};
    color: ${abc ? theme.colors.mainColor : theme.colors.white};
    background: ${abc ? theme.colors.white : theme.colors.mainColor};
    border-color: ${abc ? theme.colors.white : theme.colors.mainColor};
    font-size: ${theme.fontSize.font_18};
    font-weight: ${theme.fontWeight.font_weightBold};
    cursor: pointer;
    &:hover {
        opacity: .8;
    }
`
);

export { Btn };