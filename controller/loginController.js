import registerSchema from "../models/registerSchema.js";
import { comparePassword } from '../helpers/authHelpers.js'
import jwt from "jsonwebtoken";



export const loginController = async (req, res) => {
    try {
        const { phone, password } = await req.body;

        if (!phone) {
            res.status(404).send("Enter phone ")
            return;
        } else if (!password) {
            res.status(404).send("Enter password ")
            return;
        }
        const user = await registerSchema.findOne({ phone })

        if (!user) {
            res.status(400).send(`User Not Available please register`)
            return;
        } else {
            const comparePass = await comparePassword(password, user.password);
            if (!comparePass) {
                res.status(404).send("Incorrect Password")
                return
            }

            const token = jwt.sign({ _id: user._id }, process.env.JWT, { expiresIn: '7d' });
            res.status(200).send({
                success: true,
                message: "Login Successful",
                user: {
                    Name: user.name,
                    Email: user.email,
                    Phone: user.phone,
                },
                token
            })
            return;
        }
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "Error In Login",
            error
        })
    }
}



export const testJWT = async (req, res) => {
    try {
        console.log("Protected Route"); 
    } catch (error) {
        console.log(error)
        res.send({ error })
    }
}