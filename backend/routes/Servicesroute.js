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

module.exports = router