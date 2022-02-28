const Record =require("../../models/record")
const User =require("../../models/user")
const moment = require ("moment")

async function createRecord(workerId,workerName,clientId,clientName,clientEmail,vehicleType,washType,washPrice){

    const record= await Record.create({
        workerId,
        workerName,
        clientId,
        clientName,
        clientEmail,
        vehicleType,
        washType,
        washPrice,
        date:moment().unix()




    }).catch((error)=>{
        console.log("Error",error)
        throw new Error('Register Failed')
    })
    return {
        workerId:record.workerId,
        workerName:record.workerName,
        clientId:record.clientId,
        clientName:record.clientName,
        clientEmail:record.clientEmail,
        vehicleType:record.vehicleType,
        washType:record.washType,
        washPrice:record.washPrice
    }
}


async function getRecordById(cedula){
    const record= await Record.find({"workerId":{$eq:cedula}}).sort({date:-1}).catch((error)=>{
        console.log("Error",error)
        throw new Error('records not found')
    })
    if(record==null || record.length <=0 ){
        return []
        
    }
    return record
    
}
/** 
async function getQuerys(cedula){
    const record= await Record.find({"workerId":{$eq:cedula}}).count().catch((error)=>{
        console.log("Error",error)
        throw new Error('records not found')
    })
    if(record==null || record.length <=0 ){
        return []
        
    }
    return record
}
*/



module.exports={createRecord,getRecordById}