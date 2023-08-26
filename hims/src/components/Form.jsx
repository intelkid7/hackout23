import React from 'react'

export default function Form() {
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
            <input type="Email" id="loginput" placeholder="example@gmail.com" />
            <div id='seperator'></div>
            <input type="Password" id="loginput" placeholder="enter your password" />
            <div id='seperator'></div>
            <div id='seperator'></div>
            <h1 id="reghead">Choose your role</h1>
            <div id="rolediv">
              <input name="Role" id="role" type="radio"></input>
              <label id="labela">Admin</label>
              <div id='seperator2'></div>
              <input name="Role" id="role" type="radio"></input>
              <label id="labela">Doctor</label>
            </div>
            <button id="subbut">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
