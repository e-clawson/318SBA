const express = require("express");
const router = express.Router();

const zones = require("../data/zones");

router 
    .get("/zones", (req,res) => {
    res.json(zones);
});

module.exports = router ;