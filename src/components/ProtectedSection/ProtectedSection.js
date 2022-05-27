import { getAuth, signOut } from "firebase/auth";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { app } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import MyAccount from "./MyAccount";


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
      console.log('protected: ',currentUser);
      if(currentUser === false) {
       setTimeout(()=>{
        navigate('/');
       },5000)
      }
    },[])

  return currentUser ? (
    <div>
      LoggedIn <p>{currentUser.uid}</p>
      <button onClick={logOut}>logout</button>
      <Routes>
      <Route path="/myaccount" element={<MyAccount/>} />
      </Routes>
      <NavLink to='/myaccount'>my </NavLink>
    </div>
  ) : (
    <div>
      To access protected component u should log-in first. {currentUser}
    </div>
  );
}

export default ProtectedSection;
