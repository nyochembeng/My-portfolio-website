const express = require("express")
const React = require('react')
const router = express.Router()
const Experience = require('../models/Experiencesmodel')
const { renderToString } = require('react-dom/server')

// importing react-icons
const { BiCodeBlock } = require('react-icons/bi')
const {BsWordpress} = require('react-icons/bs')
const {FaCode} = require('react-icons/fa')
const {FaPython} = require('react-icons/fa')
const {AiFillDatabase} = require('react-icons/ai')
const {CgWebsite} = require('react-icons/cg')
const {FaLaptopCode} = require('react-icons/fa')
const {MdOutlineDesignServices} = require('react-icons/md')
const {FaNetworkWired} = require('react-icons/fa')
const {FaYoutube} = require('react-icons/fa')

// Convert the React-icon components to string representation
const iconString1 = renderToString(React.createElement(BiCodeBlock, null));
const iconString2 = renderToString(React.createElement(BsWordpress, null));
const iconString3 = renderToString(React.createElement(FaCode, null));
const iconString4 = renderToString(React.createElement(FaPython, null));
const iconString5 = renderToString(React.createElement(AiFillDatabase, null));
const iconString6 = renderToString(React.createElement(CgWebsite, null));
const iconString7 = renderToString(React.createElement(FaLaptopCode, null));
const iconString8 = renderToString(React.createElement(MdOutlineDesignServices, null));
const iconString9 = renderToString(React.createElement(FaNetworkWired, null));
const iconString10 = renderToString(React.createElement(FaYoutube, null));



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

/* router.post('/api/listexperience', async (req, res) => {

    // Create 10 experiences
    const experiences = [
        {
            icon: iconString1,
            skill: 'Web Development',
            detail: 'HTML, CSS & JS',
            levelOfKnowledge: 'Advanced',
        },
        {
            icon: iconString2,
            skill: 'Web Building',
            detail: 'WordPress',
            levelOfKnowledge: 'Advanced',
        },
        {
            icon: iconString3,
            skill: 'C/C++',
            levelOfKnowledge: 'Advanced',
        },
        {
            icon: iconString4,
            skill: 'Python',
            levelOfKnowledge: 'Beginner',
        },
        {
            icon: iconString5,
            skill: 'Database Administration',
            detail: 'SQL, MySQL',
            levelOfKnowledge: 'Advanced',
        },
        {
            icon: iconString6,
            skill: 'MERN',
            detail: 'Mongoose, Express, React, NodeJS',
            levelOfKnowledge: 'Advanced',
        },
        {
            icon: iconString7,
            skill: 'Software Development',
            detail: 'Java, Python',
            levelOfKnowledge: 'Advanced',
        },
        {
            icon: iconString8,
            skill: 'Graphic Designing',
            detail: 'Adobe Photoshop, Adobe Illustrator',
            levelOfKnowledge: 'Advanced',
        },
        {
            icon: iconString9,
            skill: 'Networking',
            detail: 'Configuration of Switches & Routers',
            levelOfKnowledge: 'Intermediate',
        },
        {
            icon: iconString3,
            skill: 'Matlab',
            levelOfKnowledge: 'Beginner',
        },
        {
            icon: iconString10,
            skill: 'Youtube',
            detail: 'Channel link',
            levelOfKnowledge: 'Beginner',
        },
    ];

    for (const experience of experiences) {
        const newExperience = new Experience(experience);
        newExperience.save();
    }
})*/

module.exports = router