const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User =require("../../models/user")


async function registerUser(email,name,cedula,password){
    try{
        const hashedPassword= await hashPassword(password)
        const token = createToken(email,name)
        const user = await User.create({
            email,
            name,
            cedula,
            password:hashedPassword,
            token,
        }).catch((error)=>{
            console.log("Error",error)
            throw new Error('Error to register'+error )
        })
    
        return {email,name,cedula,token}
    }catch(error){
        throw new Error('Enter valid information: '+ error)
    }
}

async function getOneUser(name){
    const user = await User.findOne({name}).catch((error)=>{
        throw new Error("User not found")
    })
    if(user==null){
        throw new Error("User not found")
    }
    return {name,email:user.email,imageUrl:user.imageUrl}
}
async function loginUser(email,password){
    
    const user = await User.findOne({email}).catch((error)=>{
        throw new Error("User not found")
    })
    if(user==null){
        throw new Error("User not found")
    }
    const match = await verifyPassword(password,user.password)
    if(match===false){
        throw new Error("Incorrect Password")
    }
    const token = createToken(email,user.name)
    user.token=token
    await user.save().catch((error)=>{
        throw new Error("Save new token failed")
    })
    return {email,name:user.name,token,cedula:user.cedula}

}

async function hashPassword(password){
    return await bcrypt.hash(password,5)
}
async function verifyPassword(password,inputpassword){
    return await bcrypt.compare(password,inputpassword)
    
}

function createToken(email,name){
    const token = jwt.sign({email,name},process.env.AUTH_PASSWORD)
    return token
}

module.exports={registerUser,loginUser,getOneUser}