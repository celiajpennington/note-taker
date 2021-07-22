const router = require("express").Router();
const fs = require('fs');
let db = require("../db/db.json");
const { route } = require("./html-routes");

router.get('/notes', (req, res) => {
    db = JSON.parse(fs.readFileSync ("./db/db.json", "utf-8"))
    res.json(db);
});










module.exports = router;


