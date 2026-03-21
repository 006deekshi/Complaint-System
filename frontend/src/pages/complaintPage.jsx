import React, { useState } from 'react';
import Navbar from '../components/navbar';
import api from '../lib/axios';


function ComplaintPage() {
  const [name, setName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "category") {
      setCategory(value);
    } else if (name === "description") {
      setDescription(value);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const complaintData = {
      name: isAnonymous ? "Anonymous" : name,
      isAnonymous,
      category,
      description,
    };
    try {
      const res = await api.post("/complaint", complaintData);
      alert(`Complaint submitted! ID: ${res.data.complaintId}`);
      setName("");
      setIsAnonymous(true);
      setCategory("");
      setDescription("");
      
    } catch (err) {
      console.error(err);
      alert("Failed to submit complaint. Please try again.");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="complaint-container">
        <form onSubmit={handleSubmit} className='complaint-form'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            value={name}
            onChange={handleChange}
            disabled={isAnonymous} // disable if anonymous
          /><br />

          <label>
            <input
              type="checkbox"
              name="isAnonymous"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            />
            Submit anonymously
          </label><br />

          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Ex: Hostel, Food, Academics..."
            value={category}
            onChange={handleChange}
          /><br />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
          /><br />

          <button type="submit">Submit Complaint</button>
        </form>
      </div>
    </div>
  );
}

export default ComplaintPage;