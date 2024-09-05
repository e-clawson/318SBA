const express = require("express");
const router = express.Router();

const classification = require("../data/classification");

router
    .get("/", (req,res) => {
        res.json(classification);
    });

module.exports = router;