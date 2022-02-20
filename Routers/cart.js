const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const Cart = require("../models/Cart");


//CREATE PRODUCT
router.post("/", verifyToken , async (req, res) => {
    
    const cart = new Cart(req.body);

    try{
        const savedCart = await cart.save();
        res.status(200).json(savedCart)
    }
    catch(err){
        console.log("Not working")
        res.status(500).json(err)
    }
})



//UPDATE PRODUCT
router.put("/:id", verifyToken , async (req,res) => {

    try{
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new: true, useFindAndModify: false}
        );
                
        res.status(200).json(updatedCart);
        
    }catch(err){
        res.status(500).json(err);
    }
})

// DELETE PRODUCT
router.delete("/:id", verifyToken, async(req,res) =>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }
    catch(err){
        res.status(500).json(err)
    }
})


// GET USER CART
router.get ("/find/:userId", verifyTokenAndAuthorization,async(req,res) =>{
    try{
        const cart = await Cart.findOne({userId: req.params.userId});

        res.status(200).json(cart)
    }
    catch(err){
        res.status(500).json(err)
    }
})  



// GET ALL
router.get("/", verifyTokenAndAdmin, async(req, res) => {

    try{
        const carts = await Cart.find()
        res.status(200).json(carts)
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router