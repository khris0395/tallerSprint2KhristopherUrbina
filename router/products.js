import {Router} from "express";
import { allProducts, productsByName, productsByType} from "../controllers/products/read.js";

const routerProducts = Router()

routerProducts.get("/allProducts", allProducts)
routerProducts.get("/name/:x", productsByName)
routerProducts.get("/type/:x", productsByType)

export default routerProducts