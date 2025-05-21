import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import AuthProvider from "./Contexts/AuthContext";
import { Toaster } from "react-hot-toast";
// import AuthProvider from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster/>
      <RouterProvider router={router} />
      
    </AuthProvider>
  </React.StrictMode>
);
