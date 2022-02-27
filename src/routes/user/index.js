const express = require('express')
const router = new express.Router()
const { registerUser,loginUser,getOneUser} = require('./utils')

router.post("/user/register", async(req,res)=>{
    try{
        const request= req.body
        const user= await registerUser(request.email,request.name,request.cedula,request.password)
        res.status(200).send(
            {
                status:true,
                message:"Register Done",
                data:{
                    email:user.email,
                    name:user.name,
                    cedula:user.cedula,
                    token:user.token
                }
            }
        )
    }catch(error){
        res.status(200).send(
            {
                status:false,
                message:"Register Failed",
                data:{
                    message:error.toString()
                }
            }
        )
    }

})

router.post("/user/login", async(req,res)=>{
    try{
        const request = req.body
        const userLogin = await loginUser(request.email,request.password)

        res.status(200).send(
            {
                status:true,
                message:"Login Done",
                data:{
                    email:userLogin.email,
                    name:userLogin.name,
                    token:userLogin.token,
                    cedula:userLogin.cedula
                }
            }
        )
    }catch(error){
        console.log(error)
        res.status(200).send(    {
            data:{error:error.toString()},
            status:false,
            message:"Error" 
        })
    }
})

router.get("/user/:username",async(req,res)=>{
    try{
        const request = req.body
        const params = req.params
        const user = await getOneUser(
            params.username

        )
        res.status(200).send({
            status: true,
            message: "Usuario obtenido con éxito",
            data: {user}
        })
    }catch(error){
        res.status(500).send({
            status: false,
            message: "Get failed",
            data: { error: error.toString() }
        })
    }
})


module.exports=router