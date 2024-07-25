
const jwt=require("jsonwebtoken")
const isAuth=async(req,res,next)=>{
    try{
const token=req.headers["authorization"]
if(!token){
return res.send({msg:"no token"})
}
const decoded=await jwt.verify(token,"j")

const user=await User.findById(decoded.id)
if(!user){
    return res.send({msg:"no user with this token"})
}
req.user=user
next()
    }
    catch(err){
        console.log(err)
    }
}

module.exports=isAuth

