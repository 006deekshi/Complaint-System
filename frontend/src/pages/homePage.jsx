import React from 'react'
import Navbar from '../components/navbar'
import { Link } from "react-router"

function HomePage() {
  return (
    <div>
        <Navbar />
        <div className="home-container">
        <div className="hero">
          <h1>Welcome to VoiceBox</h1>
          <p>Your quick and easy way to raise concerns and track resolutions.</p>
          <div className="hero-buttons">
            <Link to="/submit" className="btn">Add Complaint</Link>
            <Link to="/status" className="btn">Track Complaint</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage