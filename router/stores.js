import {Router} from "express";
import { allStores, storesByName, storeByPhoneNumber} from "../controllers/stores/read.js";


const routerStores = Router()

routerStores.get("/allStores", allStores)
routerStores.get("/name/:x", storesByName)
routerStores.get("/phoneNumber/:x", storeByPhoneNumber)


export default routerStores