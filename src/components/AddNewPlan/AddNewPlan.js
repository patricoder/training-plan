import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  InputsContainer,
  InputContainer,
  InputTitle,
  Input,
  Row,
  Span,
  Select,
  Option,
  Label,
} from "./AddNewPlan.styles";
import { database, firestore } from "../../firebase/firebase";
import { ref, child, get } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../../common-components";

const AddNewPlan = () => {
  const { currentUser } = useContext(AuthContext);

  const [planName, setPlanName] = useState("");
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  // const [bodyCategory, setBodyCategory] = useState([]);
  const [muscleGroup, setMuscleGroup] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState([]);
  const [selectedMuscle, setSelectedMuscle] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [workoutSeries, setWorkoutSeries] = useState("");
  const [workoutRepeats, setWorkoutRepeats] = useState("");
  const [configuredPlan, setConfiguredPlan] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "workout_body_part"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setBodyParts(snapshot.val());
          // setMuscleGroup(snapshot.val());
        }
        // console.log("log: ", this.state.bodyParts.category);
      })
      .catch((error) => {
        console.error(error);
      });

    get(child(dbRef, "workouts"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setAllWorkouts(snapshot.val());
          // console.log("workouts: ", snapshot.val());
        } else {
          console.log("No data avaiable");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {};
  }, []);

  const inputRadioHandler = (e) => {
    setSelectedBodyPart(e.currentTarget.value);
    bodyParts.map((item) => {
      if (item.body_part === e.currentTarget.value) {
        setMuscleGroup(item.category);
      }
    });
  };

  const addExcercise = () => {
    if (
      selectedBodyPart === [] ||
      selectedMuscle === "" ||
      selectedWorkout === "" ||
      workoutRepeats === "" ||
      workoutSeries === ""
    )
      return;

    setConfiguredPlan((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        name: selectedWorkout,
        repeats: workoutRepeats,
        series: workoutSeries,
        bestScore: "",
        lastScore: "",
      },
    ]);
    setSelectedWorkout("");
    setWorkoutSeries("");
    setWorkoutRepeats("");

    console.log(currentUser.uid);
  };

  const addWorkout = async () => {
    if (planName === "") return;
    // Add a new document in collection "cities"
    await addDoc(collection(firestore, "plans"), {
      id: currentUser.uid,
      name: planName,
      workouts: configuredPlan,
    });
    setConfiguredPlan([]);
    setPlanName("");
    setSelectedMuscle("");
    console.log("dodano plan");
  };
  return (
    <Container>
      <InputsContainer>
        <Row>
          <InputTitle>Your plan</InputTitle>
          <InputContainer className="your-choises">
            {selectedBodyPart}
            {configuredPlan &&
              configuredPlan.map((item) => {
                return (
                  <p key={uuidv4()}>
                    {item.name} - Series: {item.series} - Repeats:{" "}
                    {item.repeats}
                  </p>
                );
              })}
          </InputContainer>
        </Row>
        <Row>
          <InputTitle>1. Set plan name</InputTitle>
          <Input
            type="text"
            value={planName}
            onChange={(e) => setPlanName(e.currentTarget.value)}
          />
        </Row>
        <Row>
          <InputTitle>2. Select the part of the body </InputTitle>
          <InputContainer className="select-container">
            {bodyParts.map((item) => {
              return (
                <Label
                  htmlFor={item.body_part}
                  className="label-inner"
                  key={uuidv4()}
                >
                  <Input
                    type="radio"
                    className="input-radio"
                    key={item.id}
                    value={item.body_part}
                    id={item.body_part}
                    name="body-part"
                    onChange={(e) => inputRadioHandler(e)}
                  />
                  <Span className="custom-radio"></Span>
                  {item.body_part}
                </Label>
              );
            })}
          </InputContainer>
        </Row>
        <Row>
          <InputTitle>3. Choose the muscle group</InputTitle>
          <InputContainer>
            <Select
              onChange={(e) => setSelectedMuscle(e.currentTarget.value)}
              value={selectedMuscle}
            >
              <Option value="">wybierz mięsień...</Option>
              {selectedBodyPart ? (
                muscleGroup.map((cat) => {
                  return (
                    <Option key={uuidv4()} value={cat}>
                      {cat}
                    </Option>
                  );
                })
              ) : (
                <Option value="not-selected">body part not selected</Option>
              )}
            </Select>
          </InputContainer>
        </Row>
        <Row>
          <InputTitle>4. Select workout</InputTitle>
          <InputContainer className="select-workout">
            <Select
              value={selectedWorkout}
              onChange={(e) => setSelectedWorkout(e.currentTarget.value)}
            >
              {selectedMuscle ? (
                <>
                  <Option value="">wybierz ćwiczenie...</Option>
                  {allWorkouts.map((workout) => {
                    if (workout.category === selectedMuscle) {
                      return (
                        <Option value={workout.workout_name} key={uuidv4()}>
                          {workout.workout_name}
                        </Option>
                      );
                    }
                  })}{" "}
                </>
              ) : (
                <Option value={muscleGroup}>muscle group not selected</Option>
              )}
            </Select>
            Series:{" "}
            <Input
              type="text"
              value={workoutSeries}
              onChange={(e) => setWorkoutSeries(e.currentTarget.value)}
            />
            Repeats:{" "}
            <Input
              type="text"
              value={workoutRepeats}
              onChange={(e) => setWorkoutRepeats(e.currentTarget.value)}
            />
          </InputContainer>
        </Row>
        <Row>
          <InputContainer className="buttons-container">
            <Button btnAction={() => addExcercise()} title="Add excercise" />
            <Button
              btnAction={() => addWorkout()}
              title="Add workout plan"
              btnStyle="primary"
            >
              Add Workout
            </Button>
          </InputContainer>
        </Row>
      </InputsContainer>
    </Container>
  );
};

export default AddNewPlan;
