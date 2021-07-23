const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const publicationSchema = new Schema({
    title:{type: String, required :true },
    author:{type: String, required :true },
    content:{type: String, required :true },
    date:{type: String, required :true }
   
})


const Publications = mongoose.model("Publications",publicationSchema);
module.exports= Publications;