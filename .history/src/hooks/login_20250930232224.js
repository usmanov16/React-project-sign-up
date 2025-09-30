import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "../../firebase/firebase.config";
import { useContext } from "react";

export const googleLogin = () => {
    const {dispatch} = useContext
        const provider = new GoogleAuthProvider();
        // const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            dispatch({type: "LOGIN", payload:user})
            
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };