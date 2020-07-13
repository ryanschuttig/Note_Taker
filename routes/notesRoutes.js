// LOAD DATA
var noteData = require("../db/db.json");
const fs = require("fs");
const {v1: uuidv1} = require("uuid");

module.exports = function (app) {

    // API GET Requests
    app.get("/api/notes", function (req, res) {
        noteData = JSON.parse(fs.readFileSync(`${__dirname}/../db/db.json`, "utf-8"));
        res.json(noteData);
    });

    // API POST
    app.post("/api/notes", (req, res) => {
        const noteObj = req.body;
        noteObj.id = uuidv1();
        const data = fs.readFileSync(`${__dirname}/../db/db.json`, "utf-8");
        let notesArray = JSON.parse(data);
        notesArray.push(noteObj);
        fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(notesArray));
        console.log("Note successfully created!");
    });
}