import React, {useState} from 'react'
import axios from 'axios'
import toast from "react-hot-toast"


export default function FindPatient() {

    const [abhaNumber, setAbhaNumber] = useState('')


    const handleBookAppointment = async () => {

        const res = await axios.get(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/patient/${abhaNumber}`);
        
        console.log(res.data);

        if(res.data.success){
            toast.success("Patient found")
        }
        else{
            toast.error("Patient not found")
        }

    }
    

  return (
    <div>
      <input type="text" placeholder="Enter Patient AbhaNumber" onChange={(e) => setAbhaNumber(e.target.value)}/>
      <button onClick={handleBookAppointment}>Book Appointment</button>
    </div>
  )
}
