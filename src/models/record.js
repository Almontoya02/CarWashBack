const mongoose = require("mongoose")

const recordSchema = new mongoose.Schema({
    workerId:{
        type:String,
        required:true,
        trim:true,
    },
    workerName:{
        type:String,
        required:true,
        trim:true,
    },
    clientId:{
        type:String,
        required:true,
        trim:true,
    },
    clientEmail:{
        type:String,
        required:true,
        trim:true,
    },
    clientName:{
        type:String,
        required:true,
        trim:true,
    },
    vehicleType:{
        type:String,
        required:true,
        trim:true,
    },
    washType:{
        type:String,
        required:true,
        trim:true,
    },
    washPrice:{
        type:Number,
        required:true,
        trim:true,
    },
    date:{
        type:Number,
        required:true,
        trim:true,
    }

})


const Record = mongoose.model("Record", recordSchema)
module.exports=Record