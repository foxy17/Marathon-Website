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
         });
       }





module.exports = router;
