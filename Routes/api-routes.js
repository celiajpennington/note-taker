const router = require("express").Router();
const fs = require('fs');
let db = require("../db/db.json");

//API GET Request
router.get('/notes', (req, res) => {
  //Read db.json file
  db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
  //Send read data to response of GET request
    res.json(db);
});

//API POST Request
router.post("/notes", (req, res) => {
  //new note params
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        //creating random id for id
        id: Math.floor(Math.random()* 100)}
        //pushing new note into db file
        db.push(newNote)
        //written notes info
        fs.writeFileSync("./db/db.json", JSON.stringify(db))
        res.json(db);


});







module.exports = router;


