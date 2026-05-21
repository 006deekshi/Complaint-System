import React, { useState } from "react";
import Navbar from "../components/navbar";
import api from "../lib/axios";
import { TrackIllustration } from "../components/illustrations";

function TrackPage() {
  const [id, setId] = useState("");
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState("");

  async function handleTrack(e) {
    e.preventDefault();
    if (!id) { setError("Please enter a Complaint ID"); return; }
    try {
      const res = await api.get(`/complaint/${id}`);
      setComplaint(res.data); setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Complaint not found");
      setComplaint(null);
    }
  }

  const statusClass =
    complaint?.status === "Pending" ? "pending" :
    complaint?.status === "In Progress" ? "progress" : "resolved";

  return (
    <div>
      <Navbar />
      <div className="track-container">
        <div className="form-card">
          <div className="form-card-icon"><TrackIllustration /></div>
          <h2 className="form-card-title">Track Complaint</h2>
          <p className="form-card-sub">Enter your complaint ID to check status</p>
          <div className="form-divider" />

          <input
            className="field-input"
            type="text"
            placeholder="Enter Complaint ID..."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="btn-gold" onClick={handleTrack}>Track Status</button>

          {error && <p className="error">{error}</p>}

          {complaint && (
            <div className="track-result">
              <span className={`status ${statusClass}`}>{complaint.status}</span>
              <p><b>Category:</b> {complaint.category}</p>
              <p><b>Description:</b> {complaint.description}</p>
              <p><b>Submitted:</b> {new Date(complaint.createdAt).toLocaleString()}</p>
              {complaint.response && <p><b>Admin Response:</b> {complaint.response}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrackPage;
