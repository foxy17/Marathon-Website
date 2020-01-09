const express = require('express');
const router = express.Router();
const Register = require('../models/form');
var moment = require('moment');
var today = new Date();
// Welcome Page
router.get('/', (req, res) => {
  return  res.render('register');
});
router.post('/', (req, res) => {
let register=new Register;
var error="Person With This Email Is Already Registered"
var form = {
  fname:req.body.fname,
  sname:req.body.sname,
  number:req.body.number,
  email:req.body.email,
  date:today,
  category:req.body.category,
  bio:req.body.bio,
       };
  register.fname=req.body.fname;
  register.sname=req.body.sname;
  register.number=req.body.number,
  register.email=req.body.email;
  register.date=today;
  register.bio=req.body.bio,
  register.category=req.body.category;
  register.findOne({email: req.body.email}, function(err, user){
     if(user) {
       res.render('register', {
         form:form,
         error:error
          });
     }
     else {
       register.save(function(err){
             if(err){
                 console.log(err);
                 console.log(form);
                 res.render('register',{error:'1',form:form});

             }
             else{
               console.log(form);
               console.log('Subbmited');
               res.render('sucess');
             }
         })
       }

     });



});

module.exports = router;
