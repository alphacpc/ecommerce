const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const Product = require("../models/Product");


//CREATE PRODUCT
router.post("/", async (req, res) => {
    // router.post("/", verifyTokenAndAdmin , async (req, res) => {
    
    const product = new Product(req.body);

    try{
        console.log(product)
        const savedProduct = await product.save();
        res.status(200).json(savedProduct)
    }
    catch(err){
        console.log("Not working mafe")
        res.status(500).json(err)
    }
})



//UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin , async (req,res) => {

    try{
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new: true, useFindAndModify: false}
        );
                
        res.status(200).json(updateProduct);
        
    }catch(err){
        res.status(500).json(err);
    }
})

// DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, async(req,res) =>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }
    catch(err){
        res.status(500).json(err)
    }
})


// GET PRODUCT
router.get ("/find/:id", async(req,res) =>{
    try{
        const product = await Product.findById(req.params.id);

        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json(err)
    }
})



// GET ALL PRODUCTS
router.get("/", async(req,res) =>{
    
    const qNew= req.query.new;
    const qCategory= req.query.category;

    try{
        let products;

        if(qNew){
            products = await Product.find().sort({createdAt : -1}).limit(5);
        }
        else if(qCategory){
            products = await Product.find({
                productCat : {
                    $in : [qCategory],
                }
            }).sort({createdAt : -1}).limit(5);
        }
        else{
            products = await Product.find() ;
        }

        res.status(200).json(products);
    }

    catch(err){
        res.status(500).json(err)
    }
})


module.exports = router