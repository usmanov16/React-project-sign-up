import React from "react";
// import Routes from "./routes/Routes";
import Routes from "./components/routes/Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { mainContext } from "./components/context/MainContext";


function App() {
  const {state: {isAuth}, dispatch} = useContext(mainContext)

  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({type: "LOGIN", payload: user})
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return <>
  {isAuth && <Routes}
  </> <Routes />;
}

export default App;
