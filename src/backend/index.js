const express=require("express")
const mongoose=require("mongoose")
const cors=require('cors')
const app=express()
app.listen(5000)
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/creds")
const usersSchema= new mongoose.Schema({
    uname:String,
    eml:String,
    pword:String
})
let pmodel=mongoose.model("users",usersSchema)
app.post('/signup',async (req,res)=>{
    let data=new pmodel(req.body)
    let status=await data.save()
    console.log(req.body,typeof status)
    status=status.toObject()    // makes the json  to a object
    delete status.pword         // removes the password feild in the response.
    res.send(status)
})
app.post('/signin',async(req,res)=>{
    if (req.body.eml && req.body.pword){        // if the following feilds are present then proceed.
        let data= await pmodel.findOne(req.body).select('-pword')       // removes the password feild in the response.
        if(data){
            res.send(data)
        }else{
            res.send('no records found')
        }
    }else{
        res.send('no records found')
    }
    
})