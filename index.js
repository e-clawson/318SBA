//main file 
const express = require("express");
const bodyParser = require("body-parser")

const plants = require("./routes/plants");
const zones = require("./routes/zones")
const classification = require("./routes/classification");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({ extended: true }));

app.use("/plants", plants);
app.use("/zones", zones);
app.use("/classification", classification);

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

// module.exports = router;