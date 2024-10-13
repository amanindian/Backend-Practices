import mongoose from "mongoose";


const registerModel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,
    },
    role: {
        type: Number,
        default: 0,
        require: true
    },
}, {
    timestamps: true
})

export default mongoose.model("users", registerModel)