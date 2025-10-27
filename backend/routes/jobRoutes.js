const express = require("express");
const router = express.Router();
const jobctrl = require("../controller/jobController");

router.post("/",jobctrl.createjob);
router.get("/",jobctrl.getJob);
router.put("/:id",jobctrl.updatejob);
router.delete("/:id",jobctrl.deletejob);

module.exports = router;