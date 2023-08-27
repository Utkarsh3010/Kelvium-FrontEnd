import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GeistProvider>
        <CssBaseline />
        <App />
      </GeistProvider>
    </Router>
  </React.StrictMode>
);
