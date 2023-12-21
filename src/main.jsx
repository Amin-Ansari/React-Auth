//React hooks, pre-defined components and etc
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import configuredStore from "./redux/store/ConfiguredSlice.js";

//Components
import App from "./components/App.jsx";

//Utilities like CSS files
import "./utilities/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={configuredStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
