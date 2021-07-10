require('dotenv').config();
const express = require('express');
var router = express.Router();
var userLib=require('./back end/lib/userLib');
var user=require('./back end/models/registerModel');
const app = express();
var mongo = require('mongodb');
var dbconnect = require('./back end/lib/connectlib');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname+"/front end"));
app.get("/", function(req, res){
let i=__dirname+"/front end/html/registration.html";
    res.sendFile(i);
})
app.get("/login", function(req, res){
    let i=__dirname+"/front end/html/login.html";
        res.sendFile(i);
    })
app.post("/regis",function(req,res){
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var password = req.body.password;
    var companyname =req.body.companyname;
    var email = req.body.email;
    var phone = req.body.phone;
    var data ={
        "name":firstname,
        "lname":lastname,
        "pwd":password,
        "email":email,
        "cname":companyname
    }
          user.insertMany(data,(err,collection)=>{
            if(err)
            {
                throw err;
            }
            console.log(data);
            res.json(data);
        });

})
app.post("/log",function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    var data ={
        email:email,
        pwd:password
    }
    console.log(data)
          user.find(data,(err,collection)=>{
              console.log("server")
            if(err)
            {
                throw err;
            }
            console.log(collection);
            res.json(collection);
        });

})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 4000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
dbconnect.connect();
