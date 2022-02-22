const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./Config/db_connect");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./Routers/user");
const authRouter = require("./Routers/auth");
const productRouter = require("./Routers/product");
const stripeRouter = require("./Routers/stripe");

// Define some constant
const app = express()
const PORT = 5050 || process.env.PORT;


// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/checkout", stripeRouter);


// START CONNEXION FROM DB
connectDB();


//Launch connexion and open server
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT,()=> console.log("Mon serveur tourne sur le port :",PORT));
})

