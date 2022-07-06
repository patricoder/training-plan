import styled from "styled-components";
import SectionTitle from "../../styles/StyledElements/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const Row = styled.div`
  margin: 2rem 0;
`;

const WorkoutsContainer = styled.div`
`;
const SingleWorkout = styled.p`
  font-size: ${({ theme }) => theme.fontSize.font_12};
`;
const WorkoutDetails = styled(SingleWorkout)`
    margin-bottom: 1rem;
`;

const Title = styled.p`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.font_21};
  font-weight: ${({ theme }) => theme.fontWeight.font_weightSemiBold};
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 2rem 0.5rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export {
  Container,
  Row,
  WorkoutsContainer,
  Title,
  SingleWorkout,
  WorkoutDetails,
};