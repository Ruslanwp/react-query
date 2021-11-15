import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import People from "./components/People";
import Planets from "./components/Planets";
import "./index.css";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar />
        <Routes>
          <Route exact path="/planets" element={<Planets />} />
          <Route exact path="/people" element={<People />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
