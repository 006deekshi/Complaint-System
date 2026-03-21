import React, { useState } from "react";

function ComplaintCard({ data, onUpdate }) {
  const [status, setStatus] = useState(data.status || "Pending");
  const [response, setResponse] = useState(data.response || "");

  return (
    <div className="admin-card">
      <p><b>ID:</b> {data.complaintId}</p>
      <p><b>Category:</b> {data.category}</p>
      <p><b>Description:</b> {data.description}</p>

      <p><b>Status:</b> {data.status}</p>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>

      <textarea
        placeholder="Write response..."
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />

      <button onClick={() => onUpdate(data.complaintId, status, response)}>
        Update
      </button>
    </div>
  );
}

export default ComplaintCard;