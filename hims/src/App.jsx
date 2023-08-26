import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Form from './components/form'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Doctor_home from './components/Doctor_home';
// import Registration from './components/Registration'; 
import toast, { Toaster } from 'react-hot-toast';
import FindPatient from './components/FindPatient';
import Registration from './components/registration';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Form />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/Doctor_home" element={<Doctor_home />} />
      <Route path="/patient_dia" element={<patient_dia />} />
      <Route path="/BookPatient" element={<FindPatient />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
