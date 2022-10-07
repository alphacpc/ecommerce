const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");


// UPDATE USER
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

// DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, async(req,res) =>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...")
    }
    catch(err){
        res.status(500).json(err)
    }
})


// GET USER
router.get ("/find/:id", verifyTokenAndAdmin, async(req,res) =>{
    try{
        const user = await User.findById(req.params.id);
        const {userPw, ...others} = user._doc
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
})


// GET ALL USERS
router.get("/", async(req,res) =>{
    // router.get("/", verifyTokenAndAdmin, async(req,res) =>{
    
    const query = req.query.new

    try{
        const users = query ? await User.find().sort({__id:-1}).limit(5) : await User.find();
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err)
    }
})


// GET USERS STATS
router.get("/stats", verifyTokenAndAdmin, async(req,res) => {
    
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try{
        const data = await User.aggregate([
            { $match : { createdAt: {$gte : lastYear}}},
            {
                $project:{
                    month: { $month : "$createdAt"} 
                }
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum : 1 }
                }
            }
        ]);

        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json(err);
    }

})



module.exports = router