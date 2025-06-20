const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/userController");
const { protect } = require("../middleware/auth");

router.post("/me", protect, getProfile);

module.exports = router;