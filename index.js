//main file 

const express = require("express");
const app = express();
const port = 3000;

const plants = require("./data/plants");
const zones = require("./data/zones");
const classification = require("./data/classification");

app.get("/", (req, res) => {
    res.send("welcome to the plant database!");
});

app.get("/plants", (req,res) => {
    res.json(plants);
});

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});