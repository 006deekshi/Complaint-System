import React, { useState } from 'react'
import Navbar from '../components/navbar'
import api from '../lib/axios';

function TrackPage() {
  const [id, setId] = useState("");
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState("");

  async function handleTrack(e) {
    e.preventDefault();

    if (!id) {
      setError("Please enter Complaint ID");
      return;
    }

    try {
      const res = await api.get(`/complaint/${id}`);
      setComplaint(res.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Complaint not found");
      setComplaint(null);
    }
  }

  return (
    <div>
      <Navbar />
      <div className='track-container'>
        <div className='track-card'> {/* ✅ fixed */}
          <h1>Track Complaint</h1>

          <input
            type='text'
            placeholder='Enter Complaint ID'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <button onClick={handleTrack}>Track</button>

          {error && <p className="error">{error}</p>}

          {complaint && (
            <div className="track-result">
              <h3 className={`status ${
                complaint.status === "Pending" ? "pending" :
                complaint.status === "In Progress" ? "progress" :
                "resolved"
              }`}>
                Status: {complaint.status}
              </h3>

              <p><b>Category:</b> {complaint.category}</p>
              <p><b>Description:</b> {complaint.description}</p>
              <p><b>Date:</b> {new Date(complaint.createdAt).toLocaleString()}</p>
              {complaint.response && (
                <p><b>Admin Response:</b> {complaint.response}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrackPage