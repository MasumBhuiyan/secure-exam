const path = require("path")
const express = require("express");

const app = express();

app.get('', (req, res) => {
    res.sendFile("index.html", {
        root: path.join(__dirname, "./views"),
    });
});

app.get('/about', (req, res) => {
    res.send("Life is all about changes.");
});

app.listen(3000, () => {
    console.log("Server is running at port: 3000");
});