import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ErrorBoundary from "./components/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p className="mt-20 text-center">Something went wrong</p>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
