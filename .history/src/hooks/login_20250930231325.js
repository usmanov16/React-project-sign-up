

export const googleSignUp = () => {
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