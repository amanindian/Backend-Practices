import registerSchema from "../models/registerSchema.js";
import { hashPassword, comparePassword } from '../helpers/authHelpers.js'



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

        const findUser = await registerSchema.findOne({ phone })

        if (!findUser) {
            res.status(400).send(`User Not Available please register`)
            return;
        } else {

            const comparePass = await comparePassword(password, findUser.password);
            if (!comparePass) {
                res.status(404).send("Incorrect Password")
                return
            }
            res.status(200).send(`User Available and Successful Login `)
            return
        }

    } catch (error) {
        console.log(error)
    }
}