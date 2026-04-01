const express = require("express");
const router = express.Router();

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require("../controllers/recordController");

const allowRoles = require("../middleware/roleMiddleware");

router.post("/", allowRoles("admin"), createRecord);
router.get("/", allowRoles("admin", "analyst", "viewer"), getRecords);
router.put("/:id", allowRoles("admin"), updateRecord);
router.delete("/:id", allowRoles("admin"), deleteRecord);

module.exports = router;
