// LOAD DATA
var notesData = require("../db/db.json");

module.exports = function (app) {

    // API GET Requests
    app.get("/api/notes", function (req, res) {
        res.json(notesData);
    });

    // API POST
    app.post("/api/notes", (req, res) => {
        const noteObj = req.body;

        noteObj.id = uuidv1();
    })
}