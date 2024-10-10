import registerModel from '../models/registerSchema.js'
import { hashPassword, comparePassword } from '../helpers/authHelpers.js'


export const registerController = async (req, res) => {

    const { name, phone, email, password, address } = req.body;


    if (!name) {
        res.status(404).send("Enter Name ")
        return;
    } else if (!phone) {
        res.status(404).send("Enter phone ")
        return;
    } else if (!email) {
        res.status(404).send("Enter email ")
        return;
    } else if (!password) {
        res.status(404).send("Enter  password")
        return;
    }

    try {
        const hashedPass = await hashPassword(password)
        console.log(hashedPass)
        const checkUser = await registerModel.findOne({ phone });
        if (checkUser) {
            res.status(400).send("User Already Register please login ")
            console.log("first")
            return;
        } else {
            const user = await new registerModel({ name, phone, email, password: hashedPass, address }).save();

            res.status(200).send(user)
        }

    } catch (error) {
        res.status(400).send({ error })
    }


}


