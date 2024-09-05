const express = require("express");
const router = express.Router();

//add routes to other areas
const zones = require("../data/zones");
const classification = require("../data/classification");

router
    .route("/:plantName") 
    .get((req,res) => {
        const displayPlant = plants.find((p) => p.plantName === req.params.plantName);
        if (displayPlant) res.json(displayPlant);
        else next();
    })
    .post((req, res) => {
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
    })
    .patch((req, res, next) => {
        const plant = plants.find((p) => {
            if (p.plantName == req.params.plantName) {
                console.log("patch")
            }
            return true;
        });
        if (plant) res.json(plant);
        else next();
    })
    .delete((req, res, next) => {
        const plant = plants.find((p, i) => {
            if (p.plantName == req.plantName.id) {
                plants.splice(i, 1);
                return true;
            }
        });
    })

module.exports = router;