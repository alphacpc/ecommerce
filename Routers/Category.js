const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const Category = require("../models/Category");


//CREATE PRODUCT
router.post("/", async (req, res) => {
    // router.post("/", verifyTokenAndAdmin , async (req, res) => {
    
    const category = new Category(req.body);

    try{
        const savedCategory = await category.save();
        res.status(200).json(savedCategory)
    }
    catch(err){
        console.log("Not working mafe")
        res.status(500).json(err)
    }
})



//UPDATE PRODUCT
router.put("/:id", async (req,res) => {
    // router.put("/:id", verifyTokenAndAdmin , async (req,res) => {

    try{
        const updateCategory = await Category.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new: true, useFindAndModify: false}
        );
                
        res.status(200).json(updateCategory);
        
    }catch(err){
        res.status(500).json(err);
    }
})

// DELETE PRODUCT
router.delete("/:id", async(req,res) =>{
    // router.delete("/:id", verifyTokenAndAdmin, async(req,res) =>{
    try{
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }
    catch(err){
        res.status(500).json(err)
    }
})


// GET PRODUCT
router.get ("/find/:id", async(req,res) =>{
    try{
        const category = await Category.findById(req.params.id);

        res.status(200).json(category)
    }
    catch(err){
        res.status(500).json(err)
    }
})



// GET ALL PRODUCTS
router.get("/", async(req,res) =>{
    try{
        const categories = await Category.find()
        res.status(200).json(categories)
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports = router