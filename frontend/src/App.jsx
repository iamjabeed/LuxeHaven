import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContentWrapper from "./components/ContentWrapper";
import Footer from "./pages/Footer";
// import Cursor from "./components/Cursor";
// // import Shery from "sheryjs";

function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="mt-[80px]">
        {/* <Cursor /> */}
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
