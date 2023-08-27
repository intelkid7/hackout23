import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

export default function Doctor_home() {

  const [patient, setPatient] = useState([]);
  const navigate = useNavigate();

  const getPatients = async () => {
    const res = await axios.get(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/getRegisteredPatient`);
    console.log(res);
    setPatient(res.data.data);

  }

  const handleDelete = async (id) => {
    const res = await axios.delete(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/deletePatient/${id}`)
    console.log(res);
    setPatient(patient.filter((p) => p._id !== id));
  }

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <div id='homecont'>
      <Navbar></Navbar>
      <div id='tdiv'>
        <table id='ptable'>
          <tr id='trow'>
            <th id='thead'>Patient Number</th>
            <th id='thead'>Patient Name</th>
          </tr>
          <tr id='trow'>
            <td>1</td>
            <td>John</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

