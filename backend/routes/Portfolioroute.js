const express = require("express");
const Portfolio = require("../models/Portfoliomodel");
const router = express.Router();

router.route('/api/portfolio')

  .post(async (req, res) => {
    const portfolio = new Portfolio(req.body);
    await portfolio.save();
    res.status(201).json({ message: "Portfolio posted" });
  })

  .get(async (req, res) => {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios);
  })

  .patch(async (req, res) => {
    const id = req.body._id
    const portfolio = await Portfolio.findOne({ id });

    if (!portfolio) {
      res.status(404).json({ message: "Portfolio not found" });
      return;
    }
    portfolio.title = req.body.title;
    portfolio.image = req.body.image;
    portfolio.screenshots = req.body.screenshots;
    portfolio.liveDemoLink = req.body.liveDemoLink;
    await portfolio.save();
    res.status(200).json({ message: "Portfolio updated" });
  })

  .delete(async (req, res) => {
    const id = req.body._id
    const portfolio = await Portfolio.findOne({ id });
    if (!portfolio) {
      res.status(404).json({ message: "Portfolio not found" });
      return;
    }
    await portfolio.remove();
    res.status(200).json({ message: "Portfolio deleted" });
  });

router.post('/api/listportfolio', async (req, res) => {

  const portfolios = [
    {
      title: "Web Development",
      image: '../assets/web development.jpg',
      screenshots: `https://example.com/portfolio/live`,
      liveDemoLink: `https://example.com/portfolio/live`,
    },
    {
      title: "Software Development",
      image: '../assets/software development.jpg',
      screenshots: `https://example.com/portfolio/live`,
      liveDemoLink: `https://example.com/portfolio/live`,
    },
    {
      title: "Web Building",
      image: '../assets/web-design.jpg',
      screenshots: `https://example.com/portfolio/live`,
      liveDemoLink: `https://example.com/portfolio/live`,
    },
    {
      title: "Graphic Designing",
      image: '../assets/graphic designing.jpg',
      screenshots: `https://example.com/portfolio/live`,
      liveDemoLink: `https://example.com/portfolio/live`,
    },
    {
      title: "Network Engineering",
      image: '../assets/networking.jpg',
      screenshots: `https://example.com/portfolio/live`,
      liveDemoLink: `https://example.com/portfolio/live`,
    },
    {
      title: "YouTube",
      image: '../assets/youtube.jpg',
      screenshots: `https://example.com/portfolio/live`,
      liveDemoLink: `https://example.com/portfolio/live`,
    },
    {
      title: "Database Administration",
      image: '../assets/database.jpg',
      screenshots: `https://example.com/portfolio/live`,
      liveDemoLink: `https://example.com/portfolio/live`,
    },
  ];
  for (const portfolio of portfolios) {
    const newPortfolio = new Portfolio(portfolio);
    newPortfolio.save();
  }
})

module.exports = router
