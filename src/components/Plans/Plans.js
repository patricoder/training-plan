import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase";
import { where, query, QuerySnapshot } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Container, Row, SingleWorkout, Title, WorkoutDetails, WorkoutsContainer } from "./Plans.styles";
import { v4 as uuidv4 } from "uuid";

const Plans = () => {
  const { currentUser } = useContext(AuthContext);

  const [myPlans, setMyPlans] = useState([]);
  const [hide, setHide] = useState(false);
  const querySnapshot = async () => {
    const q = query(
      collection(firestore, "plans"),
      where("id", "==", currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setMyPlans((prevState) => [...prevState, doc.data()]);
    });
  };

  useEffect(() => {
    return () => {
      querySnapshot();
    };
  }, []);
  return (
    <Container>
      {myPlans.map((item) => {
        console.log(item);
        return (
          <Row key={uuidv4()}>
            <Title>{item.name}</Title>
            <WorkoutsContainer>
                {item.workouts.map(item=>{
                    return (
                      <>
                        <SingleWorkout>{item.name}</SingleWorkout>
                        <WorkoutDetails>
                            {item.series} x ({item.repeats})
                        </WorkoutDetails>
                      </>
                    );
                })}
            </WorkoutsContainer>
          </Row>
        );
      })}
    </Container>
  );
};

export default Plans;
