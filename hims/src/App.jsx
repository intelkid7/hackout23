import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar'
import Form from './components/form'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
<<<<<<< HEAD
import Registration from './components/registration';
import Doctor_home from './components/Doctor_home';
=======
import Registration from './components/registration'; 
import toast, { Toaster } from 'react-hot-toast';
import FindPatient from './components/FindPatient';

>>>>>>> a6e1852e3e5a949e70fd078183f07303582db31b

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Form />} />
      <Route path="/Registration" element={<Registration />} />
<<<<<<< HEAD
      <Route path="/Doctor_home" element={<Doctor_home />} />
      <Route path="/patient_dia" element={<patient_dia />} />
=======
      <Route path="/BookPatient" element={<FindPatient />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
>>>>>>> a6e1852e3e5a949e70fd078183f07303582db31b
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
