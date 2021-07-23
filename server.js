const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app =express();

const port = process.env.PORT ||5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const connection = mongoose.connection;
connection.once('open',()=>
console .log("MongoDB connection Established successfully!")
);

// app.get('/faculties', (req,res) => {
//     res.send('Hello world From Server app.js ')

// });

const facultieRouter = require('./routes/faculties');
app.use("/faculties",facultieRouter);
const publicationRouter = require('./routes/publications');
app.use("/publications",publicationRouter);
const orderRouter = require('./routes/orders');
app.use("/orders",orderRouter);

app.listen(port,() => console.log('The app is Running at port No : 5000 '));