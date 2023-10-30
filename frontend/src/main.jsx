import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter } from "react-router-dom";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} />)
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
