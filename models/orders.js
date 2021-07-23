const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const orderSchema = new Schema({
    name:{type: String, required :true },
    phone:{type: String, required :true },
    item1:{type: String, required :true },
    item2:{type: String, required :true },
    item3:{type: String, required :true }
   
})


const Orders = mongoose.model("Orders",orderSchema);
module.exports= Orders;