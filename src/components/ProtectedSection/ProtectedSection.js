import { getAuth, signOut } from "firebase/auth";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";

const ProtectedSection = () => {
    const { currentUser } = useContext(AuthContext)

    const auth = getAuth(app);
    let navigate = useNavigate();
    const logOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate('/')
        }).catch((error) => {
        // An error happened.
        });
    }

    useEffect(()=>{

    },[])

  return (
    currentUser ? <div>LoggedIn <p>{currentUser.uid}</p><button onClick={logOut}>logout</button></div> : <div>User Nor loggedin:  {currentUser}</div>
  )
}

export default ProtectedSection;
