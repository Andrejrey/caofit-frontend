import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Header />} />
    </Routes>
  );
}

export default App;
