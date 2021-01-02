const User=require('../models/user');
const Contact = require('../models/contact');

const {auth} =require('../middlewares/auth');
const express = require('express');
const router = express.Router();

router.post('/api/register',function(req,res){
    // taking a user
    const newuser=new User(req.body);
    
   if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});
    
    User.findOne({email:newuser.email},function(err,user){
        if(user) return res.status(400).json({ auth : false, message :"email exits"});
 
        newuser.save((err,doc)=>{
            console.log(doc)
            if(err) {console.log(err);
                return res.status(400).json({ success : false});}
            res.status(200).json({
                succes:true,
                user : doc
            });
        });
    });
 });

 router.get('/api/getAll', function (req, res){
    User.find()
    .then(Data => {
        res.send(Data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving regs."
        });
    });
 })

 router.get('/api/:id', function (req, res){
    console.log(req.params.id)
    User.findById(req.params.id)
        .then(result => {
            res.send(result);
            console.log('here is u r result',result)
        }).catch(err => {
            console.log('here is u r result err',err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving regs."
            });
        });
 })

 router.post('/api/login', function(req,res){
    let token=req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) return  res(err);
        if(user) return res.status(400).json({
            error :true,
            message:"You are already logged in"
        });
    
        else{
            User.findOne({'email':req.body.email},function(err,user){
                if(!user) return res.json({isAuth : false, message : ' Auth failed ,email not found'});
        
                user.comparepassword(req.body.password,(err,isMatch)=>{
                    if(!isMatch) return res.json({ isAuth : false,message : "password doesn't match"});
        
                user.generateToken((err,user)=>{
                    if(err) return res.status(400).send(err);
                    res.cookie('auth',user.token).json({
                        isAuth : true,
                        id : user._id,
                        email : user.email,
                        token : user.token
                    });
                });    
            });
          });
        }
    });
});

router.get('/api/profile',auth,function(req,res){
    res.json({
        isAuth: true,
        id: req.user._id,
        email: req.user.email,
        name: req.user.firstname + req.user.lastname
        
    })
});

router.get('/api/logout',auth,function(req,res){
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.sendStatus(200);
    });

}); 

router.post('/api/contact',function(req,res){
    const newuser = new Contact(req.body);
 
        newuser.save((err,doc)=>{
            if(err) {console.log(err);
                return res.status(400).json({ success : false});}
            res.status(200).json({
                succes:true,
                user : doc
            });
        });
    });

    router.get('/api/contact', function (req, res){
        Contact.find()
        .then(Data => {
            res.send(Data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving regs."
            });
        });
    
     })
    

module.exports = router
