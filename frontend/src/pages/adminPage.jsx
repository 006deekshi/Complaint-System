import React, { useEffect, useState } from "react";
import api from "../lib/axios";
import ComplaintCard from "../components/complaintCard";

function AdminPage() {
  const [complaints, setComplaints] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await api.get("/complaint"); 
      setComplaints(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (id, status, response) => {
    try {
      await api.put(`/complaint/${id}`, { 
        status,
        response,
      });
      fetchComplaints();
    } catch (err) {
      console.error(err);
    }
  };

  // 🔍 Search + Filter Logic
  const filteredComplaints = complaints.filter((c) => {
    const matchSearch = c.complaintId
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || c.status === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div>
      <div className="admin-container">
        <h1>Admin Dashboard</h1>

        {/* 🔍 Search + Filter */}
        <div className="admin-controls">
          <input
            type="text"
            placeholder="Search by Complaint ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="filter-buttons">
            <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All</button>
            <button className={filter === "Pending" ? "active" : ""} onClick={() => setFilter("Pending")}>Pending</button>
            <button className={filter === "In Progress" ? "active" : ""} onClick={() => setFilter("In Progress")}>In Progress</button>
            <button className={filter === "Resolved" ? "active" : ""} onClick={() => setFilter("Resolved")}>Resolved</button>
          </div>
        </div>

        {/* 📋 Complaints List */}
        {filteredComplaints.length === 0 ? (
          <p>No complaints found</p>
        ) : (
          filteredComplaints.map((c) => (
            <ComplaintCard
              key={c.complaintId}
              data={c}
              onUpdate={handleUpdate}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default AdminPage;