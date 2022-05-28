import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LoggedInUser from "../Logged-inUser/LoggedInUser";
import NotLoggedInUser from "../NotLogged-inUser/NotLoggedInUser";


const ProtectedSection = () => {
    const { currentUser, navigate } = useContext(AuthContext)
  
    useEffect(()=>{
      console.log('protected: ',currentUser);
      if(currentUser === false) {
       setTimeout(()=>{
        navigate('/');
       },5000)
      }
    },[])

  return currentUser ? <LoggedInUser outlet={<Outlet/>}/> : <NotLoggedInUser/>
}

export default ProtectedSection;
