import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Doctor_home() {

  const [patient, setPatient] = useState([]);

  const navigate = useNavigate();

  const getPatients = async () => {

    // window.location.reload();
    const res = await axios.get(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/getRegisteredPatient`)
    console.log(res); 
    setPatient(res.data.data);

  }

  const handleDelete = async (id) => {

    const res = await axios.delete(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/deletePatient/${id}`)
    console.log(res); 

    setPatient(patient.filter((p) => p._id !== id));

    // window.location.reload();
    // getPatients();
  }

  useEffect(() => {
    // window.location.reload();
    getPatients();
  }, []);

  return (
    <div id='tdiv'>
      <div id='menu'>Hello</div>
      <div id='table' classname="table-wrapper-scroll-y my-custom-scrollbar">
        <table classname="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <th id='sno' scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {patient.map((p, index) => (
              <tr key={index}>
                <td id='sno'>{index + 1}</td>
                <td>{p.id.firstName + " " + p.id.lastName}</td>
                <td><button onClick={() => navigate("/Patient")}>Give prescription</button></td>
                <td><button onClick={() => handleDelete(p._id)}><i class="bi bi-trash-fill"></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

