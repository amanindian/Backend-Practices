import { Schema, model } from "mongoose";


const loginSchema = new Schema(

    {

        name: {
            type: String,
            require: true
        }, email: {
            type: String,
            require: true
        }, phone: {
            type: Number,
            require: true
        }
    }
)



export default model("login", loginSchema);