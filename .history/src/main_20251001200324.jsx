import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
// import "@fontsource-variable/montserrat";
// import "@fontsource-variable/montserrat";
// import MainContext from "./context/MainContext.jsx";
import MainContext from "./components/context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <MainContext>
    <App />
    <Toaster />
  </MainContext>
);
