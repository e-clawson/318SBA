const express = require("express");
const router = express.Router();
const app = express();

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
app.set("views", "./pages");
app.set("view engine", "page");

app.get("/", (req,res) => {
    const options = {
        title: "Homepage",
        content: "Welcome to the Plant Database!", 
        info: "This is a page dedicated to sharing indormation about common plants in the US",
    };
    res.render("homepage", options);
});

module.exports = router;