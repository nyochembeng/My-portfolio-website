const express = require("express")
const React = require('react')
const router = express.Router()
const Experience = require('../models/Experiencesmodel')
const { renderToString } = require('react-dom/server')

// importing react-icons
const { BiCodeBlock } = require('react-icons/bi')
const {BsWordpress} = require('react-icons/bs')
const {AiFillDatabase} = require('react-icons/ai')
const {CgWebsite} = require('react-icons/cg')
const {MdOutlineDesignServices} = require('react-icons/md')
const {FaNetworkWired, FaYoutube, FaLaptopCode, FaPython, FaCode} = require('react-icons/fa')



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

router.post('/api/listexperience', async (req, res) => {

    // Create experiences
    const experiences = [
        {
            iconKey: 'BiCodeBlock',
            skill: 'Frontend Web Development',
            detail: 'HTML, CSS & JS',
            levelOfKnowledge: 'Advanced',
        },
        {
            iconKey: 'BsWordpress',
            skill: 'Web Building',
            detail: 'WordPress',
            levelOfKnowledge: 'Advanced',
        },
        {
            iconKey: 'FaCode',
            skill: 'C/C++',
            levelOfKnowledge: 'Advanced',
        },
        {
            iconKey: 'FaPython',
            skill: 'Python',
            levelOfKnowledge: 'Beginner',
        },
        {
            iconKey: 'AiFillDatabase',
            skill: 'Database Administration',
            detail: 'SQL, MySQL',
            levelOfKnowledge: 'Advanced',
        },
        {
            iconKey: 'CgWebsite',
            skill: 'MERN',
            detail: 'Mongoose, Express, React, NodeJS',
            levelOfKnowledge: 'Advanced',
        },
        {
            iconKey: 'FaLaptopCode',
            skill: 'Software Development',
            detail: 'Java, Python',
            levelOfKnowledge: 'Advanced',
        },
        {
            iconKey: 'MdOutlineDesignServices',
            skill: 'Graphic Designing',
            detail: 'Adobe Photoshop, Adobe Illustrator',
            levelOfKnowledge: 'Advanced',
        },
        {
            iconKey: 'FaNetworkWired',
            skill: 'Networking',
            detail: 'Configuration of Switches & Routers',
            levelOfKnowledge: 'Intermediate',
        },
        {
            iconKey: 'FaCode',
            skill: 'Matlab',
            levelOfKnowledge: 'Beginner',
        },
        {
            iconKey: 'FaYoutube',
            skill: 'Youtube',
            detail: 'Channel link',
            levelOfKnowledge: 'Beginner',
        },
    ];

    for (const experience of experiences) {
        const newExperience = new Experience(experience);
        newExperience.save();
    }
})

module.exports = router