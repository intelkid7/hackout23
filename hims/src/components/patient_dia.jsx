import React, { useState, useEffect } from "react";
import axios from "axios";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


export default function Patient_dia() {

  const [keyword, setKeyword] = useState("")

  const [result, setResult] = useState([])

  const [symptoms, setSymptoms] = useState([])

  const fetchSymptoms = async () => {

    const res = await axios.get(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/search/${keyword}`)

    if (keyword === "") {
      setResult([])
    }
    else {
      console.log(res.data.data)
      setResult(res.data.data)
    }
  }

  useEffect(() => {
    fetchSymptoms()
  }, [keyword])

  const handleAddSymptom = async () => {

    setSymptoms([...symptoms, keyword])
    // setKeyword("") 
  }


  const params = useParams();

  const [patientDetails, setPersonDetails] = useState();

  const gettingPatientDetails = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/getRegisteredPatientOne/${params.id}`);
      if(res){
        console.log(res.data.data.id);
        setPersonDetails(res.data.data.id);
      }
      else{
        toast.error("Error in getting details of patients")
      }
    }
    catch (error) {
      console.log(error);
      toast.error(`Somthing went wrong`);  
    }
  }

  useEffect(() => {
    gettingPatientDetails();
  }, []);

  return (
    <section id="pdiv" className="h-100 h-custom gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h3 id="pi" className="mb-5">
                        Patient Infomation
                      </h3>
                      <div className="row">
                        <h5 id="pihead" className="col-md-6 pt-4 pb-2">Name
                          <p id="pip"> {patientDetails?.firstName + " " + patientDetails?.lastName} </p></h5>
                        <h5 id="pihead" className="col-md-6 pt-4 pb-2">Age
                          <p id="pip"> {patientDetails?.age} </p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">ABHA Number
                          <p id="pip"> {patientDetails?.abhaNumber} </p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">D.O.B.
                          <p id="pip"> {patientDetails?.dateOfBirth} </p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">Gender
                          <p id="pip"> {patientDetails?.gender} </p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">Address
                          <p id="pip"> {patientDetails?.address.street + ", " + patientDetails?.address.city + ", " + patientDetails?.address.state + ", " + patientDetails?.address.zipCode} </p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">Contact
                          <p id="pip"> {patientDetails?.contact.phoneNumber} </p></h5>
                        <h5 id="pihead" className="col-md-6 py-4 pb-2">Upcoming Appointments
                          <p id="pip"> None </p></h5>
                        <h5 id="pihead" className="col-md-12 py-4 pb-2">Medical History
                          <p id="pip"> {patientDetails?.medicalHistory.allergies.map((items) => {return items + ", "}) + 
                                        patientDetails?.medicalHistory.conditions.map((items) => {return items + ", "}) +
                                        patientDetails?.medicalHistory.medications.map((items) => {return items})} </p></h5>
                      </div>
                    </div>
                  </div>
                  <div id="pdiv2" className="col-lg-6">
                    <div className="p-5">
                      <div id="psearch">
                        <input placeholder="Search and add symptoms" type="text" name="search" id="symps" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                      </div>
                      <div className="result-list">
                        {result?.length > 0 && keyword !== "" ? 
                        <List
                          sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 },
                          }}
                          subheader={<li />}
                        >
                          {result?.map((r) => (
                            <li key={`${r._id}`}>
                              <ul>
                                  <ListItem onClick={() => setKeyword(r.name)} className="symtoms-class" >
                                    <ListItemText primary={`${r.name}`} />
                                  </ListItem>
                              </ul>
                            </li>
                          ))}
                        </List>
                          : null}
                      </div>
                      <div className="w-100" id="addsymp">
                        <button
                          type="submit"
                          id="pres1"
                          className="btn btn-light btn-lg"
                          data-mdb-ripple-color="dark"
                          onClick={handleAddSymptom}
                        >
                          Add Symptom
                        </button>
                      </div>
                      <div id="symphead">Symptoms</div>
                      <textarea name="symptoms" id="symptext" cols="30" rows="5" className="w-100 mt-1" value={symptoms.map((s) => {
                        return `${s}, `
                      })}></textarea>
                      <div className="mt-2"></div>
                      <div className="mt-5"></div>
                      <div id="psearch">
                        <input placeholder="Search for Diseases" type="text" name="search" id="symps" />
                      </div>
                      <div id="symphead">Disease diagnosed</div>
                      <textarea name="symptoms" id="symptext" cols="30" rows="1" className="w-100 mt-1"></textarea>
                      <div className="mt-5"></div>
                      <div id="psearch">
                        <input placeholder="Search for Medicines" type="text" name="search" id="symps" />
                      </div>
                      <div id="symphead">Prescription</div>
                      <textarea name="symptoms" id="symptext" cols="30" rows="5" className="w-100 mt-1"></textarea>
                      <div className="mb-3"></div>
                      <div className="form-check d-flex justify-content-start mb-4 pb-3">
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          defaultValue
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label text-white"
                          htmlFor="form2Example3"
                        >
                          I do accept the{" "}
                          <a href="#!" className="text-white">
                            <u>Terms and Conditions</u>
                          </a>{" "}
                          of your site.
                        </label>
                        {/* <div className='result-list'>
                          <div>A</div>
                          <div>B</div>
                          <div>A</div>
                        </div> */}
                      </div>
                      <button type="submit" id="pres" className="btn btn-light btn-lg" data-mdb-ripple-color="dark">
                        Generate Prescription
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
