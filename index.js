//main file 
const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser")

const plants = require("./routes/plants");
const zones = require("./routes/zones")
const classification = require("./routes/classification");
const home = require("./routes/homepage");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({ extended: true }));

app.use("/plants", plants);
app.use("/zones", zones);
app.use("/classification", classification);
app.use("/homepage", home);

//custom error middleware 
app.use((req,res) => {
   res.status(404); 
   res.json({error: "resource not found"});
})

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});