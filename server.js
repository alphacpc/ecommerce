const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./Config/db_connect");
const cors = require("cors");
const path = require("path")
require("dotenv").config();


const userRouter = require("./Routers/user");
const authRouter = require("./Routers/auth");
const productRouter = require("./Routers/product");
const categoryRouter = require("./Routers/Category");
const stripeRouter = require("./Routers/stripe");

// DEFINE GLOBAL SOME CONSTANTs
const app = express()
const PORT = 5050 || process.env.PORT;


// USE MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());
app.use("/images", express.static(path.join(__dirname,"/images")))


// ROUTES
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/checkout", stripeRouter);


// START CONNEXION FROM DB
connectDB();


//Launch connexion and open server
mongoose.connection.once("open", () => {
    app.listen(PORT,()=> console.log("Mon serveur tourne sur le port :",PORT));
})

