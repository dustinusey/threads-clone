import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import SignUp from "./Pages/SignUp.jsx";
import "./index.css";
import { UserProvider } from "./Components/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> {/* Global state that provides User info */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
