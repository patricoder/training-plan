import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Container, Section, NavContainer, NavTitle } from "./LoggedInUser.styles";
import { NavLink } from "react-router-dom";
import { faUser, faCirclePlus, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoggedInUser({outlet}) {
  const { currentUser ,navigate } = useContext(AuthContext);
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
        LoggedInUser <button onClick={logOut}>logouyt</button>
        {outlet}
        {currentUser.uid}
        <NavContainer>
          <NavLink
            to={`/protected/${currentUser.uid}/create`}
            className="nav-link"
          >
            <FontAwesomeIcon icon={faCirclePlus} className="nav-icon" />
            <NavTitle>Add new</NavTitle>
          </NavLink>
          <NavLink
            to={`/protected/${currentUser.uid}/user`}
            className="nav-link"
          >
            <FontAwesomeIcon icon={faUser} className="nav-icon" />
            <NavTitle>User</NavTitle>
          </NavLink>
          <NavLink
            to={`/protected/${currentUser.uid}/plans`}
            className="nav-link"
          >
            <FontAwesomeIcon icon={faBookOpen} className="nav-icon" />
            <NavTitle>My plans</NavTitle>
          </NavLink>
        </NavContainer>
      </Container>
    </Section>
  );
}
