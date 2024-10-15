import { Schema, model} from "mongoose";

let collection= "products"

let schema= new Schema({

    name:{type:String, requiered:true},
    brand:{type:String, requiered:true},
    type:{type:String, requiered:true},
    price:{type:Number, requiered:true}

},{
    timestamps:true
})

let Products = model(collection, schema)

export default Products