// DEPENDENCIES
const express = require("express");
const uuidv1 = require("uuid/v1");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// ROUTES HERE

// require("./routes/index.html")(app);
// require("./routes/notes.html")(app);

app.post("/api/notes", (req, res) => {
    const noteObj = req.body;

    noteObj.id = uuidv1();




})

app.delete("/api/notes/:id", (req, res) => {
    
})





app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});