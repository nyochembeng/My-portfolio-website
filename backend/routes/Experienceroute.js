const express = require("express")
const router = express.Router()
const Experience = require('../models/Experiencesmodel')


router.route('/api/experience')

    // Route to create a new experience
    .post(async (req, res) => {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(201).json({ message: "Experience Posted" });
    })

    // Route to get all experiences
    .get(async (req, res) => {
        const experiences = await Experience.find();
        res.json(experiences);
    })

    // Route to update a experience
    .patch(async (req, res) => {
        const id = req.body._id
        const experience = await Experience.findById(id);
        if (!experience) {
            res.status(404).json({ message: "Experience not found" });
        } else {
            experience.experience = req.body.experience;
            experience.description = req.body.description;
            await experience.save();
            res.json({ message: "Experience updated" })
        }
    })

    // Route to delete a experience
    .delete(async (req, res) => {
        const id = req.body._id
        const experience = await Experience.findById(id);
        if (!experience) {
            res.status(404).json({ message: "Experience not found" });
        } else {
            await Experience.deleteOne(experience);
            res.status(204).json({ message: "Experience deleted" });
        }
     });

module.exports = router