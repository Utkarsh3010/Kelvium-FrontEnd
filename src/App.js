import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/home/dashboard";
import Profile from "./pages/home/profile";
import React from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact />
        <Route path="/Profile" element={<Profile />} exact />
      </Routes>
    </div>
  );
}

export default App;
