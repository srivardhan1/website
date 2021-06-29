const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname+"/front end"));
app.get("/register", function(req, res){
let i=__dirname+"/front end/html/registration.html";
    res.sendFile(i);
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 4000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
