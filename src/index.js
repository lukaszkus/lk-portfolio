import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/context";
import { AnimatePresence } from "framer-motion"; //if there are bugs, import from "framer-motion/dist/framer-motion"

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ScrollToTop } from "./utils";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <ScrollToTop />
          <App />
        </AnimatePresence>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
