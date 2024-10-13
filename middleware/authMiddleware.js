import jwt from "jsonwebtoken";
import registerSchema from "../models/registerSchema.js";



export const requireSignIn = (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT);
        req.user = decode;
        next()
    } catch (error) {
        console.log(error)
        res.status(404).send({ error })
    }
}


export const isAdmin = async (req, res, next) => {
    try {
        const user = await registerSchema.findById(req.user._id)
        if (user.role == 1) {
            console.log("Admin User")
            res.send("Admin User")
            next()
            return;
        } else {
            console.log("Normal User")
            res.send("Normal User")
            next()
            return;
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}