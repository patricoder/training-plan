import React, { useEffect } from 'react';
import { firestore } from '../../firebase/firebase';
import { where, query } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Plans = () => {
  const { currentUser } = useContext(AuthContext);
    const querySnapshot = async() => {
        const q = query(collection(firestore, "plans"), where("id", "==", currentUser.uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });       
    }

    useEffect(()=>{
        querySnapshot();

    },[])
    return (
        <div>
            my plans hehe
        </div>
    );
};

export default Plans;