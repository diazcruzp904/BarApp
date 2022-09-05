import express from "express"
import { getMenu, postMenu } from "../controller/menu.js" // this was added by itself because the system found the module 
import Menu from "../models/Menu.js"

//we brought in express and then we ccreated a router that will be the main source for routing request 
const router = express.Router()

//we created a router that we make the response
router.get("/", getMenu) // this now calls the controller from the file 

router.post("/", postMenu)

//we export this instance that we customized with all of our logics 
export default router