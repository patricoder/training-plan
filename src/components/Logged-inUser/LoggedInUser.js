import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container, Section } from "./LoggedInUser.styles";

export default function LoggedInUser() {
  const { navigate } = useContext(AuthContext);
  const auth = getAuth(app);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Section>
      <Container>
      <div>
        LoggedInUser <button onClick={logOut}>logouyt</button>
      </div>
      </Container>
    </Section>
  );
}
