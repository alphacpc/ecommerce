const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.put("/:id", verifyTokenAndAuthorization , async (req,res) => {

    if(req.body.password){
        const saltRounds = await bcrypt.genSalt(10);
        req.body.password  = await bcrypt.hash(req.body.psw, saltRounds);
    }

    try{
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new: true, useFindAndModify: false}
        );
        
        // if(!updateUser) res.status(409).json(`L'utilisateur ${req.params.id} n'existe pas !`);
        
        res.status(200).json(updateUser);
        
    }catch(err){
        res.status(500).json(err);
    }

    

})


module.exports = router