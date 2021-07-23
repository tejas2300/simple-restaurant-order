const express = require("express");
const router = express.Router();
const Orders = require('../models/orders');

//Request get all faculties 
router.get("/", (req, res) => {
    Orders.find()
        .then(order => res.json(order))
        .catch(err => res.status(400).json("Error : "));
});

//Request all new Faculties 
router.post("/addo", (req, res) => {
    const newOrders = new Orders({
        name:req.body.name,
      
        phone:req.body.phone,
        item1:req.body.item1,
        item2:req.body.item2,
        item3:req.body.item3
       
    });

    newOrders.save().then(()=>res.json("The new Order saved successfully! ")).catch(err => res.status(400).json("Error : "));
        // console.log(req.body)

});

module.exports = router;