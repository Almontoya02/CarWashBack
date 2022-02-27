const express = require('express')
const { verifyToken } = require('../../middleware/auth')
const router = new express.Router()
const { createRecord,getRecordById} = require('./utils')
const nodemailer = require("nodemailer");

router.post('/record/create',verifyToken, async (req,res)=>{
    try{
        const request= req.body
        const record= await createRecord(
            request.workerId,
            request.workerName,
            request.clientId,
            request.clientName,
            request.clientEmail,
            request.vehicleType,
            request.washType,
            request.washPrice

        )
        res.status(200).send(
            {
                status:true,
                message:"record created successfully",
                data:{
                    record:record
                }
            }
        )
    }catch(error){
        res.status(500).send(
            {
                status:false,
                message:"failed to create record",
                data:{
                    message:error.toString()
                }
            }
        )
    }     
})

router.get('/hola',async(req,res)=>{
    res.status(200).send(
        {
            status:true,
            message:"Hi my friend",
        }
    )
})
router.post('/record/sendrecord',verifyToken,async(req,res)=>{
    try{
       
        const request= req.body
        const transporter = nodemailer.createTransport(
            {
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                tls: {
                    rejectUnauthorized: false
                 },
                auth:{
                        user: "almontoya0299@gmail.com", // generated ethereal user
                        pass: "imamvdcxutdljykq",
                    }, // generated ethereal password
             
            }
        );
        const info = await transporter.sendMail({
            from: "Colombian Car Wash <almontoya02@outlook.com>", // sender address
            to: `<${request.clientEmail}>`, // list of receivers
            subject: "Su lavado en Colombian Car Wash", // Subject line
            html: `
            <div>
            <h1>Car Wash</h1>
            <p>Sr@ ${request.clientName} desde Car Wash agradecemos su confianza en nosotros, adjuntamos información del lavado de su Vehículo:</p>
            <ul>
              <li>
                Propietario: ${request.clientName}
              </li>
              <li>
                Cédula:${request.clientId}
              </li>
              <li>
                Vehículo: ${request.vehicleType}
              </li>
              <li>
              Tipo Lavado: ${request.washType}
                </li>
              <li>
                Fecha: ${request.date}
              </li>
              <li>
                Valor: COP $${request.washPrice}
              </li>
            </ul>
          </div>
            `
        })
        res.status(200).send(
            {
                status:true,
                message:info.messageId,
            }
        )
    }catch(error){
        res.status(500).send(
            {
                status:false,
                message:"failed to send record",
                data:{
                    message:error.toString()
                }
            }
        )
    }  
})

router.get('/record/getbyuser/:user',verifyToken, async(req,res)=>{
    try{
        const params = req.params
        const record= await getRecordById(
            params.user,
        )
        res.status(200).send(
            {
                status:true,
                message:"records get by user Done",
                data:{
                    record
                }
            }
        )
    }
    catch(error){
        res.status(500).send(
            {
                status:false,
                message:"failed to get records",
                data:{
                    message:error.toString()
                }
            }
        )
    }   

})


module.exports=router