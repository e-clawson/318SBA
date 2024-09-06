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

app.use(express.static("./styles"));

const fs = require("fs");

app.engine("page", (filepath, options, callback) => {
   fs.readFile(filepath, (err,content) => {
    if (err) return callback(err);

    const rendered = content
        .toString()
        .replaceAll("#title#", `${options.title}`)
        .replace("#content#", `${options.content}`)
        .replace("#info#", `${options.info}`)
   });  
});
app.set("views", "/pages");
app.set("view engine", "page");

app.get("/", (req,res) => {
    const options = {
        title: "Homepage",
        content: "Welcome to the Plant Database!", 
        info: "This is a page dedicated to sharing indormation about common plants in the US",
    };
    res.render("homepage", options);
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