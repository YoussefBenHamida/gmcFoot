const express=require("express")
const connectDB=require("./config/connectDB")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors());
connectDB()
const port=5000
app.use("/foot",require("./routes/userAndMatch"))
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})