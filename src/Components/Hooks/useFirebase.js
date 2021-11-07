import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";

import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState ('');
    const [isLoading, setIsLoading] = useState(true);

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
      return signInWithPopup(auth, GoogleProvider)
        
    };

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({});
        console.log('sign out succesful')
      }).catch((error) => {
        setError(error)
      })
      .finally(()=>setIsLoading(false))



   }

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            if(user){
               
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
        
    }
    
    ,[]);
    return {
        signInWithGoogle,
        logOut,
        user,
        setUser,
        error, 
        setError,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;