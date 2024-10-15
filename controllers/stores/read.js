import Store from "../../models/Store.js"

let allStores= async (req,res)=>{

    try {

        let all= await Store.find()
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error            
        })
    }
}

let storesByName = async (req,res)=>{

    try {

        let nameQuery = req.params.x
        let all= await Store.find({name : nameQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error            
        })
    }
}

let storeByPhoneNumber = async (req,res)=>{

    try {

        let phoneNumberQuery = req.params.x
        let all= await Store.find({phoneNumber : phoneNumberQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error            
        })
    }
}

export {allStores, storesByName, storeByPhoneNumber}