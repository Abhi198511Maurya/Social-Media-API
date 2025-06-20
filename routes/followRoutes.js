const express = require("express");
const router = express.Router();
const { followUser } = require("../controllers/followController");
const { protect } = require("../middleware/auth");

router.put("/:id", protect, followUser);

module.exports = router;
