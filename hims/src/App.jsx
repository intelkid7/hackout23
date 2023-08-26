import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/form'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Registration from './components/registration';
import Doctor_home from './components/Doctor_home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Form />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/Doctor_home" element={<Doctor_home />} />
      <Route path="/patient_dia" element={<patient_dia />} />
    </Routes>
  )
}

export default App
