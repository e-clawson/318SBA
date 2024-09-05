const express = require("express");
const router = express.Router();

const zones = require("../data/zones");

router 
    .get("/", (req,res) => {
    res.json(zones);
});

module.exports = router;