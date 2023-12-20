//React hooks, pre-defined components and etc
import React from "react";
import ReactDOM from "react-dom/client";

//Components
import App from "./components/App.jsx";

//Utilities like CSS files
import "./utilities/index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
