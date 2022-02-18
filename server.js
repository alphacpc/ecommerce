const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./Config/db_connect");
require("dotenv").config();
const app = express()
const PORT = 5050 || process.env.PORT;



// START CONNEXION FROM DB
connectDB();


//Launch connexion and open server
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT,()=> console.log("Mon serveur tourne sur le port :",PORT));
})

