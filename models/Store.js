import { Schema, model} from "mongoose";

let collection= "stores"

let schema= new Schema({

    name:{type:String, requiered:true},
    address:{type:String, requiered:true},
    phoneNumber:{type:Number, requiered:true},

},{
    timestamps:true
})

let Stores = model(collection, schema)

export default Stores