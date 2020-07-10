const express = require("express");

const uuidv1 = require("uuid/v1");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// ROUTES HERE


app.post("/api/notes", (req, res) => {
    const noteObj = req.body;

    noteObj.id = uuidv1();




})

app.delete("/api/notes/:id", (req, res) => {
    
})





app.listen(PORT, () => {
    console.log("App listening on port: ${PORT}");
})