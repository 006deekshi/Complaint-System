const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    complaintId: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: function() {return !this.isAnonymous; }
    },
    isAnonymous: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Resolved"],
        default: "Pending"
    },
    response: {
        type: String
    }

}, {timestamps: true});

const Complaint = mongoose.model("Complaint",complaintSchema);
module.exports = Complaint