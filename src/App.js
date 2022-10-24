import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routers/Routes";
const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
