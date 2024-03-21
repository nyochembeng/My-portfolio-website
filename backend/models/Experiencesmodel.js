const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  skill: { type: String, required: true },
  detail: {type: String, },
  levelOfKnowledge: { type: String, required: true },
});

const Experience = mongoose.model("Experience", experienceSchema)

module.exports = Experience