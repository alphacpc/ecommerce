const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.ACCESS_MONGODB_LOCAL_CREDENTIALS, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
    catch(err){
        console.log("Erreur de connexion à MongoDB");
        console.log(err);
    }
}

module.exports = connectDB;