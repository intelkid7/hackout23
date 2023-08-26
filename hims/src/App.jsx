import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/form'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Registration from './components/registration';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Form />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>
  )
}

export default App
