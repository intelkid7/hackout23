import React from 'react'
import Navbar from './Navbar'

export default function Home() {
    return (
      <div className="container">
        <div className="tabs">
          <div className="tab active" id="emailTab">
            Email
          </div>
          <div className="tab" id="passwordTab">
            Password
          </div>
        </div>
        <div className="tab-content active" id="emailContent">
          <input type="email" placeholder="Email" />
        </div>
        <div className="tab-content" id="passwordContent">
          <input type="password" placeholder="Password" />
        </div>
        <button>Log In</button>
        <div className="register-link">
          New user? <a href="#">Register here</a>
        </div>
      </div>
    );
}
