const Job = require("../models/Job");   // Import Job model

// Insert (Create a Job)
exports.createjob = async(req, res) => {
    try {
        const job = await Job.create(req.body);
        res.json(job);
    } catch (err) {
        res.json(err);
    }
};
// Get all Jobs (View)
exports.getJob = async(req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.json(err);
    }
};
// Update Job by ID
exports.updatejob = async (req, res) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(job);
    } catch (err) {
        res.json(err);
    }
};

// Delete Job by ID
exports.deletejob = async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.json({ message: "Job deleted successfully" });
    } catch (err) {
        res.json(err);
    }  
};