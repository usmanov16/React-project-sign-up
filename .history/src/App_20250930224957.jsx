import React from "react";
// import Routes from "./routes/Routes";
import Routes from "./components/routes/Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";


function App() {
  return <Routes />;
}

export default App;
