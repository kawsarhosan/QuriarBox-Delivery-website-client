import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";

import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
        .then((result)=>{
            
            setUser(result.user)
            console.log('sign in with google succesfully', result.user);
        })
        .catch(error=>{
            setError(error.message)
        })
    };

    const logOut = () =>{
        signOut(auth).then(() => {
            setUser({});
        console.log('sign out succesful')
      }).catch((error) => {
        setError(error)
      });



   }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
               
                setUser(user);
            }
        })
    }
    
    ,[]);
    return {
        signInWithGoogle,
        logOut,
        user,
        setUser,
        error, 
        setError
    }
};

export default useFirebase;