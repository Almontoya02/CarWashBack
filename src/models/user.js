const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        match:RegExp(/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/)
    },
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:18
    },
    cedula:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:6
    },
    token:{
        type:String,
    },

})


const User = mongoose.model("User", userSchema)
module.exports=User