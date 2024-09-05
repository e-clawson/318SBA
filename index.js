//main file 

const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ extended: true }));

const plants = require("./data/plants");
const zones = require("./data/zones");
const classification = require("./data/classification");

app.get("/", (req, res) => {
    res.send("welcome to the plant database!");
    
});

app
    .route("/plants/:plantName")
    .get((req,res) => {
        res.json(plants);
    });
    .post((req,res) => {
        if (req.body.plantName) {
            if (plants.find((p) => p.plantName == req.body.plantName)) {
                res.json({error: `this plant already exists! Do you want to edit it? <href src=/plants/${req.body.plantName}>Edit Plant Info Here</href>`})
                return;
            }
    
        const plant = {
            id: plants[plants.length -1].id + 1,
            plantName: req.body.plantName,
            biNom: req.body.biNom,
            USDAZone: [req.body.USDAZone], 
            description: req.body.description,
        };

        plants.push(plant);
        res.json(users[users.length -1]);
        } else res.json({ error: "not enough information" });
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

//custom error middleware 
app.use((req,res) => {
   res.status(404); 
   res.json({error: "resource not found"});
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});