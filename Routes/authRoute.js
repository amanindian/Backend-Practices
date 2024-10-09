import express from "express";
import { loginController } from "../controller/loginController.js";


const routes = express.Router()

routes.post('/login', loginController)


export default routes;