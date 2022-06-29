import React from "react";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    let navigate = useNavigate();

    useEffect(()=>{
        const auth = getAuth(app);
            onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setCurrentUser(user);
                navigate('/protected/' + uid + '/plans')
                // console.log("Auth state(true): ", user)

            } else {
                setCurrentUser(false);
                // console.log("Auth state(false): ", currentUser)
            }
    });

    },[])
    return (
      <AuthContext.Provider value={{ currentUser, navigate}}>
        {children}
      </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider }