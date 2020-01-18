var express=require("express");
var bodyParser=require("body-parser");
const path = require('path');
var app=express()
const mongoose = require('mongoose');
const ngrok = require('ngrok');

mongoose.connect('mongodb+srv://arnav:subject17@cluster0-rwjdn.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true});
   mongoose.connection.once('open', function(){
     console.log('Conection has been made!');
   }).on('error', function(error){
       console.log('Error is: ', error);
   });

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '/css')));
app.use(express.static(path.join(__dirname, '/javascripts')));
app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.urlencoded({
	extended: true
}));

//load view engine
app.set('views', [path.join(__dirname, 'views')]);
app.set('view engine', 'ejs');


//
app.use('/form', require('./routes/form.js'));
// app.use('/otp', require('./routes/updates.js'));
app.get('/',function(req,res){
return res.render('home');
});
app.get('/routemap',function(req,res){
return res.render('maps');
});
app.get('/sucess',function(req,res){
return res.render('sucess');
});
app.get('/notice',function(req,res){
return res.render('comingsoon');
});

app.listen(8080, function() {
  console.log('Server started on port 3000...' + process.env.PORT)
});
