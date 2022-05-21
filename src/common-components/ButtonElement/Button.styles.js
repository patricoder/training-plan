import styled from "styled-components"

const Btn = styled.button(
  ({ theme, abc }) => `
    width: 100%;
    padding: 1rem 0;
    border: none;
    border: 1px solid transparent;
    margin-bottom: 1.5rem;
    border-radius: ${theme.radiusValue.radius};
    color: ${abc ? theme.colors.mainColor : theme.colors.white};
    background-color: ${abc ? theme.colors.white : 'transparent'};
    border-color: ${!abc && theme.colors.white};
    linear-background: ${abc && theme.colors.mainColor.mainGradient}
    font-size: ${theme.fontSize.font_18};
    font-weight: ${theme.fontWeight.font_weightBold};
    cursor: pointer;
    &:hover {
        opacity: .8;
    }
`
);

export { Btn };