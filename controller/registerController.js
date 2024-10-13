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
        const checkUser = await registerModel.findOne({ phone });
        const checkUserEmail = await registerModel.findOne({ email });
        if (checkUser || checkUserEmail) {
            res.status(400).send(`User ${checkUser ? "Phone Number" : "Email"} Already Register please login `);
            return;
        } else {
            await new registerModel({ name, phone, email, password: hashedPass, address }).save();
            res.status(200).send({
                success: true,
                message: "User Registered Successfully",
                user: {
                    Name: name, Phone: phone, Email: email
                }
            }
            )
        }

    } catch (error) {
        res.status(400).send({ error })
    }


}


