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

app.get("/plants/:plantName", (req,res) => {
    const displayPlant = plants.find((p) => p.plantName === req.params.plantName);
    if (displayPlant) res.json(displayPlant);
    else next();
})

app.get("/zones", (req,res) => {
    res.json(zones);
});

app.get("/classification", (req,res) => {
    res.json(classification);
});

app.use((req,res) => {
   res.status(404); 
   res.json({error: "resource not found"});
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});