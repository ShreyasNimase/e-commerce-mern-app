// mongodb+srv://nimaseshreyas3525:<db_password>@cluster0.y9re7mm.mongodb.net/

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require('cors');
//create a database connection -> u can also
//create a seperate file for this and then import /use that file



mongoose.connect(
    "mongodb+srv://nimaseshreyas3525:shreyas3525@cluster0.y9re7mm.mongodb.net/"
  )
  .then(()=>console.log("MongoDB connected"))
  .catch ((error)=>console.error("MongoDB connection error:", error));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    headers : [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma"
    ],
    credentials : true
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=> console.log(`Server is now running on port ${PORT}`));


