import styled, { StyledComponent } from "styled-components";
import SectionContainer from '../styles/StyledElements/SectionContainer'
const Section = styled.section`
    width: 100%;
`
const Container = styled(SectionContainer)`
    border: 1px solid black;
`



export { Section, Container };