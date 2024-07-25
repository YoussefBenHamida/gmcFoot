const express=require("express")
const router=express.Router()
const User=require("../models/user")
const Match=require("../models/match")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const isAuth = require("../middleweare/isAuth");
//Matchs routes

//Add Match
router.post("/addMatch",async(req,res)=>{
    const {nom_de_terrain,localisation,date,organisateur,nombre_de_joueur,prix} = req.body
    const newMatch = new Match({
        nom_de_terrain,
        localisation,
        organisateur,
        date,
        nombre_de_joueur,
        prix
    })
    const match = await newMatch.save()
    res.send({msg:"Match added", match})
})

//Get all matchs or get match  by req
router.get('/getMatchBy', async (req, res) => {
    try {
      const { date,localisation,prix,nombre_de_joueur,nom_de_terrain} = req.query;
  
      let filter = {};
      if (localisation) {
        filter.localisation = localisation;
      }
      if (prix){
        filter.prix=prix
      }
      if (nombre_de_joueur){
        filter.nombre_de_joueur = nombre_de_joueur
      }
      if(nom_de_terrain){
        filter.nom_de_terrain = nom_de_terrain
      }
      if(date){
        filter.date = date
      }
       
        const matchs = await Match.find(filter);
  
      res.send({ msg: 'This is all the matches', matchs });
    } catch (err) {
      res.status(500).send({ msg: 'Error fetching matches', error: err.message });
    }
  });
//Delete User 
router.delete('/deleteMatch/:id',async(req,res)=>{
const {id}=req.params
const match = await Match.findOneAndDelete({_id:id})
res.send({msg:"Match deleted!", match})
})

//User Routes
//register new user
router.post("/register",async(req,res)=>{
    const{name,lastName,email,password,isAdmin}=req.body
let user=await User.findOne({email})
if(user){
    return res.send({msg:"user already exist"})
}
if(name ===""){
  return res.send({msg:"err"})
}
if(lastName ===""){
  return res.send({msg:"err"})
}
if(email ===""){
  return res.send({msg:"err"})
}
if(password ===""){
  return res.send({msg:"err"})
} 
user=new User({name,lastName,email,password,isAdmin})
const salt=10
let hashedPassword=await bcrypt.hash(password,salt)
user.password=hashedPassword
await user.save()

const payload={
    id:user._id
}

var token = jwt.sign(payload, 'j');

res.send({msg:"user added with success !",user,token})

})

//login
router.post("/login",async(req,res)=>{
    const{email,password}=req.body

    let user=await User.findOne({email})
    console.log(email)
    if(!user){
        return res.send({msg:"user not found"})
    }
    let isMatch=await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.send({msg:"bad credentials !"})
    }
    const payload={
        id:user._id
    }
    
    var token = jwt.sign(payload, 'j');


    res.send({msg:"user logged with success !",token,user})

})
//get auth user
router.get("/user",isAuth,(req,res)=>{
res.send({user:req.user})
})
module.exports=router
