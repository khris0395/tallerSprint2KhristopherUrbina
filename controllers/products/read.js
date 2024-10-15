import Product from "../../models/Product.js"

let allProducts= async (req,res)=>{

    try {

        let all= await Product.find()
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error            
        })
    }
}

let productsByName = async (req,res)=>{

    try {

        let nameQuery = req.params.x
        let all= await User.find({name : nameQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error            
        })
    }
}

let productsByType = async (req,res)=>{

    try {

        let typeQuery = req.params.x
        let all= await User.find({type : typeQuery})
        return res.status(200).json({
            response: all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error            
        })
    }
}

export {allProducts, productsByName, productsByType}