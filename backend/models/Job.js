const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number },
    type: { type: String, enum: ["Full-Time", "Part-Time", "Internship"], required: true },
    description: { type: String, required: true },
    requirements: { type: [String] },
    postedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Job",jobSchema);