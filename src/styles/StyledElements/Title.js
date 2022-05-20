import styled from "styled-components";

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.mainFont};
  font-size: ${({ theme }) => theme.fontSize.font_36};
  font-weight: ${({ theme }) => theme.fontWeight.font_weightBold};
  margin-bottom: 0;
`;

export default SectionTitle;
