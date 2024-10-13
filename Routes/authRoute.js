import express from "express";
import { loginController, testJWT } from "../controller/loginController.js";
import { registerController } from "../controller/registerController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";



const routes = express.Router()

routes.post('/register', registerController)
routes.post('/login', loginController)
routes.get('/test', requireSignIn, isAdmin, testJWT)


export default routes;