import { stringLength } from '@firebase/util';
import styled from 'styled-components';
import SectionContainer from '../../styles/StyledElements/SectionContainer';

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
`;

const Container = styled(SectionContainer)`
`

export { Section, Container }