import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/context";
import { AnimatePresence } from "framer-motion"; //if there are bugs, import
import App from "./App.jsx";

import { ScrollToTop } from "./utils";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <>
            <ScrollToTop />
            <App />
          </>
        </AnimatePresence>
      </Router>
    </ContextProvider>
  </StrictMode>
);
