import React, { useState } from "react";

function ComplaintCard({ data, onUpdate }) {
  const [status, setStatus] = useState(data.status || "Pending");
  const [response, setResponse] = useState(data.response || "");

  const statusClass =
    data.status === "Pending" ? "pending" :
    data.status === "In Progress" ? "progress" : "resolved";

  return (
    <div className="c-card">
      <div className="c-card-row">
        <span className="c-label">ID</span>
        <span className="c-value"><strong>{data.complaintId}</strong></span>
        <span className={`status ${statusClass}`} style={{ marginLeft: "auto" }}>{data.status}</span>
      </div>

      <div className="c-divider" />

      <p className="c-value"><strong>Category:</strong> {data.category}</p>
      <p className="c-value"><strong>Description:</strong> {data.description}</p>

      <div className="c-divider" />

      <div className="c-actions">
        <select className="c-select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
        <textarea
          className="c-textarea"
          placeholder="Write a response to the complainant..."
          value={response}
          onChange={(e) => setResponse(e.target.value)}
        />
        <button className="c-update-btn" onClick={() => onUpdate(data.complaintId, status, response)}>
          Update
        </button>
      </div>
    </div>
  );
}

export default ComplaintCard;
