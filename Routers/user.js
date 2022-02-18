const { restart } = require("nodemon");

const router = require("express").Router();

router.get("/", (req,res) => {
    res.send("user test is successfull");
})

router.post("/", (req,res) => {
    const username = req.body.username;
    console.log("username : ", username)
})

module.exports = router