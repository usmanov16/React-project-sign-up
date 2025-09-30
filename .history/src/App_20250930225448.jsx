import React from "react";
// import Routes from "./routes/Routes";
import Routes from "./components/routes/Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { mainContext } from "./components/context/MainContext";


function App() {
  const {dispatch} = useContext(mainContext)

  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch({type: "LOGIN", payload})
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return <Routes />;
}

export default App;
