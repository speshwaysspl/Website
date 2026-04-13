const Testimonial = require("../models/Testimonial");
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort("-createdAt");
    res.json(testimonials);
  } catch (err) { res.status(500).json({ message: "Server Error" }); }
};