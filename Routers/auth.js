const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();



// Inscription
router.post("/inscription", async (req,res) => {


    const checkUserExist = await User.findOne({username: req.body.username}) || await User.findOne({userEmail: req.body.email});
    checkUserExist && res.status(400).json({user: "email or username already exists" });

    try{

        const saltRounds = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.psw, saltRounds);

        const newUser = new User({
            userFname : req.body.fname,
            userLname : req.body.lname,
            username : req.body.username,
            userEmail: req.body.email,
            userPw : hashedPass,
        })

        const savedUser = await newUser.save()

        console.log("Sauvegarde de:",savedUser)
        res.status(200).json(savedUser);

    }

    catch(err){
        console.log("Not Response from server !")
        res.sendStatus(500);
        console.log(err)
    }
})





// Connexion
router.post("/connexion", async (req,res) => {
    
    try{
        
        const user = await User.findOne({username: req.body.identifiant}) || await User.findOne({userEmail: req.body.identifiant});
        !user && res.status(400).json("email ou pseudo incorrect !");
    
        const validated = await bcrypt.compare(req.body.password, user.userPw);
        !validated && res.status(400).json("mot de passe incorrect !");

        const accessToken = jwt.sign(
            {
                id : user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SEC,
            {expiresIn : "3d"}
        )
    
        const { userPw , ...others} = user._doc;
        
        res.status(200).json({others,accessToken});
    }
    
    catch(err){
        console.log("Not working")
        res.status(500).json(err);
    }


})



module.exports = router;