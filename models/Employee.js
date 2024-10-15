import { Schema, model} from "mongoose";

let collection= "employees"

let schema= new Schema({

    name:{type:String, requiered:true},
    position:{type:String, requiered:true},
    salary:{type:Number, requiered:true}

},{
    timestamps:true
})

let Employees = model(collection, schema)

export default Employees