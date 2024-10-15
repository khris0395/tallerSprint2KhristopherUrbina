import Employee from "../../models/Employee.js"

let allEmployees= async (req,res)=>{

    try {

        let all= await Employee.find()
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error            
        })
    }
}

let employeesByName = async (req,res)=>{

    try {

        let nameQuery = req.params.x
        let all= await Employee.find({name : nameQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error            
        })
    }
}

let employeesByPosition = async (req,res)=>{

    try {

        let positionQuery = req.params.x
        let all= await Employee.find({position : positionQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error            
        })
    }
}



export {allEmployees, employeesByName, employeesByPosition}