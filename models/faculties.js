const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const facultiSchema = new Schema({
    name:{type: String, required :true },
    email:{type: String, required :true },
    phone:{type: String, required :true },
    designation:{type: String, required :true },
    locationOfChamer:{ type: String, required :true }
})


const Faculties = mongoose.model("Faculties",facultiSchema);
module.exports= Faculties;