import React, { useState } from "react";
import Navbar from "../components/navbar";
import api from "../lib/axios";
import { SubmitIllustration } from "../components/illustrations";

function ComplaintPage() {
  const [name, setName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post("/complaint", {
        name: isAnonymous ? "Anonymous" : name,
        isAnonymous, category, description,
      });
      alert(`Complaint submitted!\nYour ID: ${res.data.complaintId}`);
      setName(""); setIsAnonymous(true); setCategory(""); setDescription("");
    } catch (err) {
      alert("Failed to submit. Please try again.");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="complaint-container">
        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-card-icon"><SubmitIllustration /></div>
          <h2 className="form-card-title">Submit Complaint</h2>
          <p className="form-card-sub">Your concern will be reviewed promptly</p>
          <div className="form-divider" />

          <label className="field-label">Your Name</label>
          <input
            className="field-input"
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isAnonymous}
          />

          <label className="anon-row">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            />
            Submit anonymously
          </label>

          <label className="field-label">Category</label>
          <input
            className="field-input"
            type="text"
            placeholder="e.g. Hostel, Food, Academics..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label className="field-label">Description</label>
          <textarea
            className="field-input"
            placeholder="Describe your complaint in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" className="btn-gold" style={{ marginTop: "0.25rem" }}>
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default ComplaintPage;
