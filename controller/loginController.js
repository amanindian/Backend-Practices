import express from "express"
import loginSchema from "../models/loginSchema.js";
import mongoose from "mongoose";



export const loginController = async (req, res) => {
    try {
        const { name, phone, email } = await req.body;


        const user = await new loginSchema({
            name, phone, email
        }).save()

        res.send(user).status(200)

        console.log(name, phone, email)
    } catch (error) {
        console.log(error)
    }
}
