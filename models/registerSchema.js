import mongoose from "mongoose";


const registerModel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    address: {
        type: String,
    },
    date: {
        type: String,
        default: Date.now
    }

})



export default mongoose.model("users", registerModel)