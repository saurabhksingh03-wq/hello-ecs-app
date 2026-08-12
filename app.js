const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello from AWS ECS 🚀</h1>
        <h2>CI/CD using GitHub Actions</h2>
        <p>Docker + ECS + CloudWatch</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        uptime: process.uptime(),
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`);
});
