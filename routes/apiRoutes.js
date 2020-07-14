// LOAD DATA
const fs = require("fs");
const { v1: uuidv1 } = require("uuid");

module.exports = function (app) {

    // API GET Requests
    app.get("/api/notes", function (req, res) {
        const noteData = JSON.parse(fs.readFileSync(`${__dirname}/../db/db.json`, "utf8"));
        res.json(noteData);
    });

    // API POST
    app.post("/api/notes", (req, res) => {
        const data = fs.readFileSync(`${__dirname}/../db/db.json`, "utf8");
        let notesArray = JSON.parse(data);
        const noteObj = req.body;
        noteObj.id = uuidv1();
        notesArray.push(noteObj);
        fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(notesArray));
        res.send("Note successfully created!");
    });

    // API DELETE
    app.delete("/api/notes/:id", (req, res) => {
        let noteData = JSON.parse(fs.readFileSync(`${__dirname}/../db/db.json`, "utf8"));
        const deletedNotes = noteData.filter(function (noteObj) {
            return noteObj.id !== req.params.id;
        })
        fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(deletedNotes));

        res.json(deletedNotes);

    });
}
