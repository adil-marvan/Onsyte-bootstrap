import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage/LoginPage'
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
   
  )
}

export default App