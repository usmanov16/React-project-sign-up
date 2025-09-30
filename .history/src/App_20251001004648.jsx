import React, { useContext, useEffect } from "react";
import Routes from "./components/routes/Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { mainContext } from "./components/context/MainContext";

function App() {
  const {
    state: { isAuth },
    dispatch,
  } = useContext(mainContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "LOGOUT" }); 
      }
    });

    
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
