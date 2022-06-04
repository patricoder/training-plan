import React, { Component } from "react";
import {
  Container,
  Title,
  InputsContainer,
  InputContainer,
  InputTitle,
  Input,
} from "./AddNewPlan.styles";
import { database } from "../../firebase/firebase";
import { ref, child, get } from "firebase/database";

class AddNewPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planName: "",
      allWorkouts: [],
      bodyParts: [],
      selectedBodyPart: null,
    };
  }
  componentDidMount() {
    const dbRef = ref(database);
    //get body parts
    get(child(dbRef, "workout_body_part"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.setState({ bodyParts: snapshot.val() });
        }
        console.log("log: ", this.state.bodyParts);
      })
      .catch((error) => {
        console.error(error);
      });

    //get workouts list
    get(child(dbRef, "workouts"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((item) => {
            this.state.allWorkouts.push(item);
          });
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

  render() {
    return (
      <Container>
        {/* <Title>Create your plan</Title> */}
        <InputsContainer>
          <InputContainer>
            <InputTitle>1. Set plan name</InputTitle>
            <Input
              type="text"
              value={this.state.planName}
              onChange={(e) =>
                this.setState({ planName: e.currentTarget.value })
              }
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>2. Choose body part</InputTitle>
            {this.state.bodyParts.map((item) => {
              return (
                <label htmlFor={item.body_part}>
                  <Input
                    type="radio"
                    key={item.id}
                    value={item.body_part}
                    id={item.body_part}
                    name="body-part"
                    onChange={(e) =>
                      this.setState({ selectedBodyPart: e.currentTarget.value })
                    }
                  />
                  {item.body_part}
                </label>
              );
            })}
          </InputContainer>
          <InputContainer>
            <InputTitle>3. Choose body part</InputTitle>
              
          </InputContainer>
        </InputsContainer>
      </Container>
    );
  }
}

export default AddNewPlan;
