import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="title">
        <h1>VoiceBox</h1>
      </div>
      <div className="nav-buttons">
        <Link to="/submit" className="btn">Add Complaint</Link>
        <Link to="/status" className="btn">Track Complaint</Link>
      </div>
    </div>
  );
}
export default Navbar;