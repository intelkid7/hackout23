import React from 'react'
import Navbar from './Navbar'

export default function Home() {
    return (
      <div id='homecont'>
        <Navbar></Navbar>
        <h1 id='homehead'>Manage Your Hospital</h1>
        <h1 id='homehead2'>Like a Pro</h1>
        <button id='tour'>Take a tour</button>
      </div>
    );
}
