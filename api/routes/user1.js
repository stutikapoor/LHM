const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User1=require('../model/testquery1');
const router = express.Router();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  });

router.get('/',function(req,res){
    User1.find(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
        }
    })
})

router.post('/add',function(req,res){
    const name=req.body.name
    const email=req.body.email
    const number=req.body.number
     new User({
        name:name,
        email:email,
        number:number,
        
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
//////////////////////////////////////////////////////updating data///////////////////////////////////
router.post('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let UserUpdate = {
        _id :id,
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        city : req.body.city,
        address : req.body.address
    };
    User.findOneAndUpdate({_id:id}, UserUpdate,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(data)
            res.json(data)
        }
        
    })
})

/////////////////edit 
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    User.findById(id, function (err,data){
        res.json(data);
})
})

//////////////////////////////////////////////////delete data///////////////////////////////////////////////
router.get('/delete/:id',(req,res)=>{
    let id=req.params.id
    User.findOneAndRemove(id,(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log(data)
        }
    })
})
module.exports = router;

/////////////////////////////////////////////////////signin//////////////////////////////////////////////////////
router.post('/signin',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    UserRegister.findOne({
        email:email
    },(err,user)=>{
        if(err){
            res.json(err);
        }
        else{
            console.log(user);
            if(user == null ){
              res.json({message:"Check your Credentials"});
            }
            else if (user.password != password){
                res.json({message:"Check your password"});
            }
            else{
                res.json(user);
            }
        }
    })
})

/////////////////////getdatabyid/////////////////////////////////////
router.get('/getbyid/:id',(req,res)=>{
    let id = req.params.id;
    UserRegister.findOne({
        _id:id
    },(err,user)=>
    {
        if(err){
            console.log(err);
        }
        else{
            if(user==null)
            {
                res.json({message:"Does not exist"});
            }
            else{
                res.json(user);
            }
        }
    })
})


router.post('/addRegister',function(req,res){
    const city=req.body.city
    const email=req.body.email
    const name=req.body.name
    const password=req.body.password
    const address=req.body.address
    new UserRegister({
        address:address,
        email:email,
        name:name,
        city:city,
        password:password
    }).save(function(err,data){
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
            res.json(data)
        }
    })
})
module.exports = router;