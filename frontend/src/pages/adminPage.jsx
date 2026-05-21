import React, { useEffect, useState } from "react";
import api from "../lib/axios";
import ComplaintCard from "../components/complaintCard";

function AdminPage() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => { fetchComplaints(); }, []);

  const fetchComplaints = async () => {
    try {
      const res = await api.get("/complaint");
      setComplaints(res.data);
    } catch (err) { console.error(err); }
  };

  const handleUpdate = async (id, status, response) => {
    try {
      await api.put(`/complaint/${id}`, { status, response });
      fetchComplaints();
    } catch (err) { console.error(err); }
  };

  const filtered = complaints.filter((c) => {
    const matchSearch = c.complaintId.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || c.status === filter;
    return matchSearch && matchFilter;
  });

  const filters = ["All", "Pending", "In Progress", "Resolved"];

  return (
    <div className="admin-wrap">
      <h1 className="admin-heading">Admin Dashboard</h1>

      <div className="admin-toolbar">
        <input
          className="admin-search"
          type="text"
          placeholder="Search by Complaint ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-pills">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-pill ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: "var(--txt-2)", fontSize: "0.9rem" }}>No complaints found.</p>
      ) : (
        filtered.map((c) => (
          <ComplaintCard key={c.complaintId} data={c} onUpdate={handleUpdate} />
        ))
      )}
    </div>
  );
}

export default AdminPage;
