import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Registration() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("female"); 
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("doctor");
  const [password, setPassword] = useState("")
  const [hospital, setHospital] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    console.log(gender)

    let gen = "" 

    if(gender === "option1"){
      gen = "Female"
    }
    else if(gender === "option2"){
      gen = "Male"
    }
    else{
      gen = "Other"
    }

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("gender", gen);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("role", role);
    formData.append("password", password);
    formData.append("hospital", hospital);

    try{
        const res = await axios.post(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/registerDoctor`, formData);

        console.log(res.data);

        toast.success(res.data.message);

    } catch(err){

      console.log(err);
      // toast.error(err.response.data.message);

    }


  }

  return (
    <>
      <div className="col-12 col-lg-9 col-xl-9" id="regdiv">
        <div id="rform" style={{ borderRadius: 15 }}>
          <div className="card-body p-4 p-md-5">
            <div className="mb-4 pb-2 pb-md-0 mb-md-5" id="rhead">
              <img src="logolight.png" alt="Logo" id="reglog" />
              <h4 id="rehead">Register</h4>
            </div>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="firstName" style={{ marginLeft: 0 }}>First Name</label>
                    <input placeholder="Example: Aakash" value={firstName} type="text" id="reginput" className="form-control form-control-lg" fdprocessedid="kmarb3" onChange={(e) => setFirstName(e.target.value)}/>
                    <div className="form-notch"><div className="form-notch-leading" style={{ width: 9 }} /><div className="form-notch-middle" style={{ width: '70.4px' }} /><div className="form-notch-trailing" /></div></div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="lastName" style={{ marginLeft: 0 }}>Last Name</label>
                    <input placeholder="Example: Mehra" value={lastName} type="text" id="reginput" className="form-control form-control-lg" fdprocessedid="o98pm" onChange={(e) => setLastName(e.target.value)}/>

                    <div className="form-notch"><div className="form-notch-leading" style={{ width: 9 }} /><div className="form-notch-middle" style={{ width: '69.6px' }} /><div className="form-notch-trailing" /></div></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h6 className="mb-2 pb-1">Gender: </h6>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="option1" defaultChecked onChange={(e) => setGender(e.target.value)}/>
                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                  </div>
                  <div className="form-check form-check-inline"> 
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue="option2" onChange={(e) => setGender(e.target.value)}/>
                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="option3" onChange={(e) => setGender(e.target.value)}/>
                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="hospital" style={{ marginLeft: 0 }}>hospital</label>
                    <input placeholder="Enter the name of hospital" value={hospital} type="email" id="reginput" className="form-control form-control-lg" fdprocessedid="6qu5b4" onChange={(e) => setHospital(e.target.value)}/>
                    <div className="form-notch"><div className="form-notch-leading" style={{ width: 9 }} /><div className="form-notch-middle" style={{ width: 40 }} /><div className="form-notch-trailing" /></div></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="emailAddress" style={{ marginLeft: 0 }}>Email</label>
                    <input placeholder="example@gmail.com" value={email} type="email" id="reginput" className="form-control form-control-lg" fdprocessedid="6qu5b4" onChange={(e) => setEmail(e.target.value)}/>
                    <div className="form-notch"><div className="form-notch-leading" style={{ width: 9 }} /><div className="form-notch-middle" style={{ width: 40 }} /><div className="form-notch-trailing" /></div></div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="phoneNumber" style={{ marginLeft: 0 }}>Phone Number</label>
                    <input placeholder="+91 XXXXXXXXXX" type="tel" value={phone} id="reginput" className="form-control form-control-lg" fdprocessedid="zdks1d" onChange={(e) => setPhone(e.target.value)}/>
                    <div className="form-notch"><div className="form-notch-leading" style={{ width: 9 }} /><div className="form-notch-middle" style={{ width: '92.8px' }} /><div className="form-notch-trailing" /></div></div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="password" style={{ marginLeft: 0 }}>Password</label>
                    <input placeholder="Enter your password" value={password} type="password" id="reginput" className="form-control form-control-lg" fdprocessedid="zdks1d" onChange={(e) => setPassword(e.target.value)}/>
                    <div className="form-notch"><div className="form-notch-leading" style={{ width: 9 }} /><div className="form-notch-middle" style={{ width: '92.8px' }} /><div className="form-notch-trailing" /></div></div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="conform-password" style={{ marginLeft: 0 }}>Confirm Password</label>
                    <input placeholder="Confirm your password" type="password" id="reginput" className="form-control form-control-lg" fdprocessedid="zdks1d" />
                    <div className="form-notch"><div className="form-notch-leading" style={{ width: 9 }} /><div className="form-notch-middle" style={{ width: '92.8px' }} /><div className="form-notch-trailing" /></div></div>
                </div>
              </div>
              <div className="mt-4 pt-2">
                <button id="subbut" type="submit" onClick={handleSubmit}><h5>Register</h5></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
