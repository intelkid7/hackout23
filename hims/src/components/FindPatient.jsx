import React, { useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'


export default function FindPatient() {

  const [abhaNumber, setAbhaNumber] = useState('')

  const navigate = useNavigate()

  const handleBookAppointment = async () => {

    const res = await axios.get(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/addPatient/${abhaNumber}`);

    console.log(res.data);

    if (res.data.success) {
      toast.success(res.data.message);
      // window.location.reload();
      navigate('/Doctor_home')
    }
    else {
      toast.error(res.data.message);
    }
  }

  return (
    <div id='fp'>
      <div id='bp'>
        <div id='bphead'>
          <img id='bpimg' src="logolight.png" alt="" />
          <h1 id='moto'>Empowering Healthcare</h1>
        </div>
        <div id='bpcontent'>
          <h1 id='reghead'>Patient Registration</h1>
          <div style={{ marginTop: "2rem" }}></div>
          <input id='abhano' type="text" value={abhaNumber} placeholder="Enter Patient's ABHA Number" onChange={(e) => setAbhaNumber(e.target.value)} />
          <div style={{ marginTop: "2rem" }}></div>
          <button id='babut' onClick={handleBookAppointment}>Book Appointment</button>
        </div>
      </div>
    </div>
  )
}
