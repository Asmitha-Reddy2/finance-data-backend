const express = require("express");
const router = express.Router();

const { getSummary } = require("../controllers/dashboardController");
const allowRoles = require("../middleware/roleMiddleware");

// analyst and admin can view dashboard
router.get("/summary", allowRoles("admin", "analyst"), getSummary);

module.exports = router;