const User = require("../models/User");

exports.followUser = async (req, res) => {
  try {
    const userToFollow = await User.findById(req.params.id);
    if (!userToFollow) return res.status(404).json({ message: "User not found" });

    const currentUser = await User.findById(req.user._id);
    if (!currentUser.following.includes(userToFollow._id)) {
      currentUser.following.push(userToFollow._id);
      userToFollow.followers.push(currentUser._id);
      await currentUser.save();
      await userToFollow.save();
    }

    res.json({ message: "User followed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};