import styled from 'styled-components';
import screen_breakpoint from './screen_breakpoints';

const SectionContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  ${screen_breakpoint.sm} {
    margin: auto;
    padding-left: 3rem;
    padding-right: 3rem;
    max-width: 54rem;
  }
  ${screen_breakpoint.md} {
    padding-left: 4rem;
    padding-right: 4rem;
    max-width: none;
    /* max-width: 76.8rem; */
  }
  ${screen_breakpoint.lg} {
    max-width: 99.1rem;
  }
  ${screen_breakpoint.xl} {
    max-width: 110.4rem;
  }
  ${screen_breakpoint.xxl} {
    padding-left: 0;
    padding-right: 0;
    max-width: 128rem;
  }
  ${screen_breakpoint.xxxl} {
    max-width: 136.4rem;
  }
`;

export default SectionContainer;
