import {Router} from "express"
import { registerUser } from "../controllers/user.controller.js"// make sure user.controller.js export not as default

const router = Router()

router.route("/register").post(registerUser)


export default router