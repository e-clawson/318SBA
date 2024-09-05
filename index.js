//main file 
const express = require("express");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ extended: true }));

const app = express();
const port = 3000;

const plants = require("./routes/plants");
const zones = require("./data/zones");
const classification = require("./data/classification");

app.use("routes/plants.js", plants);
app.use("routes/zones.js", zones);
app.use("routes/classification.js", classification);

app.get("/", (req, res) => {
    res.send("welcome to the plant database!");
    
});

//custom error middleware 
app.use((req,res) => {
   res.status(404); 
   res.json({error: "resource not found"});
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});