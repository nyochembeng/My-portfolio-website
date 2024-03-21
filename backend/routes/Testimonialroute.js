const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonialsmodel");

router.route('api/testimonials')

.post(async (req, res) => {
    const avatar = window.getUrl("avatar");
    const testimonial = new Testimonial({
      avatar,
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
  
    await testimonial.save();
    res.status(201).json({ message: "Testimonial posted", testimonial: testimonial, });
  })

.get(async (req, res) => {
  const testimonials = await Testimonial.find();
res.json(testimonials);
})

.delete(async (req, res) => {
    const id = req.body._id
  const testimonial = await Testimonial.findByIdAndRemove(id);

  if (!testimonial) {
    res.status(404).json({
      message: "Testimonial not found",
    });
    return;
  }

  res.status(200).json({
    message: "Testimonial deleted successfully",
  });
});

module.exports = router;
