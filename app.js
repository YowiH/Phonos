const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/gallery", (req, res) => {
    const dirPath = path.join(__dirname, "public", "images");
    fs.readdir(dirPath, (err, files) => {
        if (err) throw err;
        res.render("gallery", {files});
    });
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

