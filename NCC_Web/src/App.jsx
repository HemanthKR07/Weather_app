import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import "./components/Main/Main.css";
import { Routes, Route } from "react-router-dom";
import Faq from "./Faq";
import Update from "./Update";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="Faq" element={<Faq />} />
      <Route path="Update" element={<Update />} />
    </Routes>
  );
}

export default App;
