//main file 

const express = require("express");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ extended: true }));

const app = express();
const port = 3000;

const plants = require("./data/plants");
const zones = require("./data/zones");
const classification = require("./data/classification");

app.get("/", (req, res) => {
    res.send("welcome to the plant database!");
    
});

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