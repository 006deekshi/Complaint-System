const express = require("express");
const Complaint = require("../models/complaint.model");
const auth = require("../middlewares/auth")
const router = express.Router();

// Create complaint
router.post("/", async (req, res) => {
  try {
    const { name, isAnonymous, description, category } = req.body;
    const complaintId = "CMP" + Math.floor(1000 + Math.random() * 9000);

    const newComplaint = new Complaint({
      complaintId,
      name,
      isAnonymous,
      category,
      description
    });

    await newComplaint.save();
    res.status(201).json({ message: "Complaint Submitted", complaintId });
  } catch (error) {
    console.log("error in creating complaint", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get complaint by ID
router.get("/:id", async (req, res) => {
  try {
    const complaintId = req.params.id;
    const complaint = await Complaint.findOne({ complaintId });
    if (!complaint) {
      return res.status(404).json({ message: "Complaint Not Found!" });
    }
    res.json(complaint);
  } catch (error) {
    console.log("error in tracking complaint", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get ALL complaints (ADMIN)
router.get("/", auth ,async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (error) {
    console.log("error in fetching complaints", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update complaint (admin response/status)
router.put("/:id",auth, async (req, res) => {
  try {
    const { status, response } = req.body;
    const updated = await Complaint.findOneAndUpdate(
      { complaintId: req.params.id },
      { status, response },
      { returnDocument: "after" }
    );
    if (!updated) {
      return res.status(404).json({ message: "Complaint Not Found!" });
    }
    res.status(200).json(updated);
  } catch (error) {
    console.log("error in updating complaint", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;