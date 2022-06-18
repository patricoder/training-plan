import React, { Component } from "react";
import {
  Container,
  Title,
  InputsContainer,
  InputContainer,
  InputTitle,
  Input,
  Row,
  Span,
  Select,
  Option,
} from "./AddNewPlan.styles";
import { database } from "../../firebase/firebase";
import { ref, child, get } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { Btn } from "../../common-components/ButtonElement/Button.styles";

class AddNewPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planName: "",
      allWorkouts: [],
      bodyParts: [],
      bodyCategory: [],
      muscleGroup: [],
      selectedBodyPart: "",
      selectedMuscle: "",
      selectedWorkout: "",
      workoutSeries: '',
      workoutRepeats: '',
      workoutToPlan: {
        id: 0,
        name: "",
        series: "",
        repeats: "",
        bestScore: "",
      },
      configuredPlan: [],
    };
  }
  componentDidMount() {
    const dbRef = ref(database);
    //get body parts
    get(child(dbRef, "workout_body_part"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.setState({ bodyParts: snapshot.val() });
          snapshot.val().map((item) => {
            this.setState((prevState) => {
              // (item)
              return { muscleGroup: [...prevState.muscleGroup, item] };
            });
          });
        }
        // console.log("log: ", this.state.bodyParts.category);
      })
      .catch((error) => {
        console.error(error);
      });

    //get workouts list
    get(child(dbRef, "workouts"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.setState({ allWorkouts: snapshot.val() });
          // console.log("workouts: ", snapshot.val());
        } else {
          console.log("No data avaiable");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    // for example we can clear timesets or intervals here
  }

  inputRadioHandler(e) {
    this.setState({ selectedBodyPart: e.currentTarget.value });
    // console.log("selected body part: ", this.state.selectedBodyPart);
    this.state.bodyParts.map((item) => {
      if (item.body_part === e.currentTarget.value) {
        this.setState({ muscleGroup: item.category });
      }
    });
  }

  addWorkout = () => {
    this.setState((prevState) => ({
      // workoutToPlan: {
      //   ...prevState.workoutToPlan,
      //   id: prevState.workoutToPlan.id + 1,
      //   name: prevState.selectedWorkout,
      //   repeats: this.state.workoutRepeats,
      //   series: this.state.workoutSeries,
      // },
      configuredPlan: [
        ...prevState.configuredPlan,
        {
          id: uuidv4(),
          name: prevState.selectedWorkout,
          repeats: this.state.workoutRepeats,
          series: this.state.workoutSeries,
          bestScore: "",
        },
      ],
    }));
  };

  render() {
    return (
      <Container>
        <InputsContainer>
          <Row>
            <InputTitle>Your plan</InputTitle>
            <InputContainer className="your-choises">
              {this.state.configuredPlan && 
                this.state.configuredPlan.map(item => {
                  return <p key={uuidv4()}>{item.name} - Series: {item.series} - Repeats: {item.repeats}</p>
                })
              }
            </InputContainer>
          </Row>
          <Row>
            <InputTitle>1. Set plan name</InputTitle>
            <Input
              type="text"
              value={this.state.planName}
              onChange={(e) =>
                this.setState({ planName: e.currentTarget.value })
              }
            />
          </Row>
          <Row>
            <InputTitle>2. Select the part of the body </InputTitle>
            <InputContainer className="select-container">
              {this.state.bodyParts.map((item) => {
                return (
                  <label
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
                      onChange={(e) => this.inputRadioHandler(e)}
                    />
                    <Span className="custom-radio"></Span>
                    {item.body_part}
                  </label>
                );
              })}
            </InputContainer>
          </Row>
          <Row>
            <InputTitle>3. Choose the muscle group</InputTitle>
            <InputContainer>
              <Select
                onChange={(e) =>
                  this.setState({ selectedMuscle: e.currentTarget.value })
                }
                value={this.state.selectedMuscle}
              >
                <Option value="">wybierz mięsień...</Option>
                {this.state.selectedBodyPart ? (
                  this.state.muscleGroup.map((cat) => {
                    return (
                      <Option key={uuidv4()} value={cat}>
                        {cat}
                      </Option>
                    );
                  })
                ) : (
                  <Option value="not-selected">part not selected</Option>
                )}
              </Select>
            </InputContainer>
          </Row>
          <Row>
            <InputTitle>4. Select workout</InputTitle>
            <InputContainer className="select-workout">
              <Select
                value={this.state.selectedWorkout}
                onChange={(e) =>
                  this.setState({ selectedWorkout: e.currentTarget.value })
                }
              >
                {this.state.selectedMuscle ? (
                  this.state.allWorkouts.map((workout) => {
                    if (workout.category === this.state.selectedMuscle) {
                      return (
                        <Option value={workout.workout_name} key={uuidv4()}>
                          {workout.workout_name}
                        </Option>
                      );
                    }
                  })
                ) : (
                  <Option value={this.state.muscleGroup}>
                    part not selected
                  </Option>
                )}
              </Select>
              Series:{" "}
              <input
                type="number"
                value={this.state.workoutSeries}
                onChange={(e) =>
                  this.setState({ workoutSeries: e.currentTarget.value })
                }
              />
              Repeats:{" "}
              <input
                type="number"
                value={this.state.workoutRepeats}
                onChange={(e) =>
                  this.setState({ workoutRepeats: e.currentTarget.value })
                }
              />
            </InputContainer>
          </Row>
          <Row>
            <Btn onClick={this.addWorkout}>Add</Btn>
          </Row>
        </InputsContainer>
      </Container>
    );
  }
}

export default AddNewPlan;
