const express = require("express")
const router = express.Router()
const Service = require('../models/Servicesmodel')

router.route('/api/service')

    // Route to create a new service
    .post(async (req, res) => {
        const service = new Service(req.body);
        await service.save();
        res.status(201).json({ message: "Service Posted" });
    })

    // Route to get all services
    .get(async (req, res) => {
        const services = await Service.find();
        res.json(services);
    })

    // Route to update a service
    .patch(async (req, res) => {
        const id = req.body._id
        const service = await Service.findById(id);
        if (!service) {
            res.status(404).json({ message: "Service not found" });
        } else {
            service.service = req.body.service;
            service.description = req.body.description;
            await service.save();
            res.json({ message: "Service updated" })
        }
    })

    // Route to delete a service
    .delete(async (req, res) => {
        const id = req.body._id
        const service = await Service.findById(id);
        if (!service) {
            res.status(404).json({ message: "Service not found" });
        } else {
            await Service.deleteOne(service);
            res.status(204).json({ message: "Service deleted" });
        }
    });

/*router.post('/api/listservices', async (req, res) => {

    const services = [
        {
          service: "Web Development",
          description: "I develop websites and web applications with modern technologies and frameworks to create engaging and responsive user experiences.",
        },
        {
          service: "Mobile Development",
          description: "I develop mobile applications for iOS and Android platforms, utilizing native and hybrid approaches to deliver high-performance and intuitive user interfaces.",
        },
        {
          service: "Graphic Design",
          description: "I offer professional graphic design services, including logo and branding design, marketing materials, and print design such as flyers and posters.",
        },
        {
          service: "Web Building",
          description: "I build custom websites using WordPress, the most popular content management system, to provide dynamic and user-friendly interfaces that are easy to manage and update.",
        },
        {
          service: "Network Engineering",
          des cription: "I provide networking solutions, including configuring routers and switches, and interconnecting networks to enable seamless communication and improve network performance.",
        },
        {
          service: "Database Administration",
          description: "I specialize in creating and managing databases, ensuring that your data is secure, organized, and easily accessible to support your business needs.",
        },
        {
          service: "YouTube",
          description: "I create high-quality video content for YouTube, covering a wide range of topics including technology, problem solving, and education, to engage and entertain my audience.",
        },
      ];
    for (const service of services) {
        const newService = new Service(service);
        newService.save();
    }
})*/

module.exports = router