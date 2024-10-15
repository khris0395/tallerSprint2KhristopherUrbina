import {Router} from "express";
import { allEmployees, employeesByName, employeesByPosition} from "../controllers/employees/read.js";

const routerEmployees = Router()

routerEmployees.get("/allEmployees", allEmployees)
routerEmployees.get("/name/:x", employeesByName)
routerEmployees.get("/position/:x", employeesByPosition)

export default routerEmployees