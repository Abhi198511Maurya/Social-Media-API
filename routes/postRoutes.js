const express = require("express");
const router = express.Router();
const { createPost, getPosts, addComment, likePost } = require("../controllers/postController");
const { protect } = require("../middleware/auth");

router.post("/", protect, createPost);
router.get("/", protect, getPosts);
router.put("/:id/like", protect, likePost);
router.post("/:id/comment", protect, addComment);

module.exports = router;