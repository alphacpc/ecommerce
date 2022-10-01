const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;

    if(authHeader){

        const token = authHeader.split(" ")[1]

        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) res.status(403).json("Token non valide !");

            req.user = user
            next()
        })
    }
    else{
        return res.status(401).json("Vouz n'etes pas authentifié !");
    }
}


const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req,res, ()=> {
        if (req.user.id === req.params.id || req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("Tu n'as pas les acces pour faire cette opération !")
        }
    })
}


const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req,res, () => {
        if (req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("Tu n'as pas les acces pour faire cette opération, vous etes pas un admin !")
        }
    })
} 

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };