const Review = require("../models/Review");
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true }).sort("-createdAt");
    res.json(reviews);
  } catch (err) { res.status(500).json({ message: "Server Error" }); }
};
exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (err) { res.status(500).json({ message: "Server Error" }); }
};