const express = require("express");
const router = express.Router();
const Publications = require('../models/publications');

//Request get all publications  
router.get("/", (req, res) => {
    Publications.find()
        .then(publications => res.json(publications))
        .catch(err => res.status(400).json("Error : "));
       
});

//Request all new publications 
router.post("/addp", (req, res) => {
    const newPublications = new Publications({
      
        title:req.body.title,
        author:req.body.author,
        content:req.body.content,
        date:req.body.date
    });

    newPublications.save().then(()=>res.json("The new Publication saved successfully! ")).catch(err => res.status(400).json("Error : "));
        // console.log(req.body)

});

module.exports = router;