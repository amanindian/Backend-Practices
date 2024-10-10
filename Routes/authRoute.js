import express from "express";
import { loginController } from "../controller/loginController.js";
import {registerController} from "../controller/registerController.js";



const routes = express.Router()

routes.post('/login', loginController)
routes.post('/register', registerController)


export default routes;