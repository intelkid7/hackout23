import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Form() {

  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 


  //function for handleLogin button
  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(role + " " + email + " " + password);
    try {
      if(password.length < 6){
        toast.error("Please enter minimum 6 character password!");
        navigate("/Login");
      } 

      else if(!email){
        toast.error("Please enter email address!");
        navigate("/Login");
      }

      else{
        console.log(role + " " + email + " " + password);

        const res = await axios.post(`${import.meta.env.VITE_REACT_API_APP_PORT}/api/v1/auth/login`, {role, email, password});

        if (res.data.success) {
          toast.success(res.data.message);
          navigate('/Doctor_home');
        }
        else {
          toast.error(res.data.message);
        }
      }
    }
    catch (error) {
      console.log(error);
      toast.error(`Something went wrong to login`);
    }
  }

  return (
    <div>
      <div id='logdiv'>
        <div id='logform'>
          <div id='logimgdiv'>
            <img src="logolight.png" id='loglog' />
            <h1 id='moto'>Empowering Healthcare</h1>
          </div>
          <form action="" id='logform2'>
            <h1 id='reghead'>Login</h1>
            <div id='seperator'></div>
            <input type="email" id="loginput" name="email" value={email} placeholder="enter your email id" onChange={(e) => setEmail(e.target.value)}/>
            <div id='seperator'></div>
            <input type="password" id="loginput" name="password" value={password} placeholder="enter your password" onChange={(e) => {setPassword(e.target.value)}} />
            <div id='seperator'></div>
            <div id='seperator'></div>
            <h1 id="reghead">Choose your role</h1>
            <div id="rolediv">
              <input name="role" id="role" type="radio" value={role} onChange={(e) => {setRole("admin")}}></input>
              <label id="labela">Admin</label>
              <div id='seperator2'></div>
              <input name="role" id="role" type="radio" value={role} onChange={(e) => {setRole("doctor")}}></input>
              <label id="labela">Doctor</label>
            </div>
            <button id="subbut" type='submit' onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
