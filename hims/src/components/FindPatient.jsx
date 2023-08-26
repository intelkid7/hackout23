import React, {useState} from 'react'
import axios from 'axios'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'


export default function FindPatient() {

    const [abhaNumber, setAbhaNumber] = useState('')

    const navigate = useNavigate()

    const handleBookAppointment = async () => {

        const res = await axios.get(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/addPatient/${abhaNumber}`);
        
        console.log(res.data);

        if(res.data.success){
            toast.success(res.data.message);
            // window.location.reload();
            navigate('/Doctor_home')
        }
        else{
            toast.error(res.data.message);
        }
    }
    
  return (
    <div>
      <input type="text" value={abhaNumber} placeholder="Enter Patient AbhaNumber" onChange={(e) => setAbhaNumber(e.target.value)} />
      <button onClick={handleBookAppointment}>Book Appointment</button>
    </div>
  )
}
