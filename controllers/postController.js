const Post = require("../models/Post");
const Comment = require("../models/Comment.js")

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({ user: req.user._id, content: req.body.content });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "name").sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.likes.includes(req.user._id)) {
      post.likes.pull(req.user._id); // Unlike
    } else {
      post.likes.push(req.user._id); // Like
    }

    await post.save();
    res.json({ likes: post.likes.length });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    
    const newComment = new Comment({
      post: post._id,
      user: req.user._id,
      text: content,
    });
    
    await newComment.save();

    post.comments.push({ user: req.user._id, text: content });
    await post.save();

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
