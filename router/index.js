import { Router } from "express";
import routerStores from "./stores.js";
import routerEmployees from "./employees.js"
import routerProducts from "./products.js";

const router = Router()

router.use("/stores",routerStores)
router.use("/employees",routerEmployees)
router.use("/products",routerProducts)


export default router