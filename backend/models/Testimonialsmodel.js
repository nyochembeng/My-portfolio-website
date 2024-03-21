const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
  avatar: { type: String, default: "../assets/placeholder.png" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

TestimonialSchema.index({ name: 1 });

const Testimonial = mongoose.model("Testimonial", TestimonialSchema);

module.exports = Testimonial;