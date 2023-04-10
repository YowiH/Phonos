const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

const viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath);
app.set("view engine", "ejs");

app.get("/gallery", (req, res) => {
    const dirPath = path.join(__dirname, "public", "images");
    fs.readdir(dirPath, (err, files) => {
        if (err) throw err;
        res.render("gallery", {files});
    });
});

app.use(express.static("public"));
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

