import {Router} from "express"
import { registerUser } from "../controllers/user.controller.js"// make sure user.controller.js export not as default

import {upload} from "../middlewares/multer_middleware.js"

const router = Router()


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)


export default router