var mongoose = require('mongoose');

var registerSchema = new mongoose.Schema({
    name: {type:String, required:true},
    lname: {type:String, required:true},
    email: {type:String, required:true, unique:true}, // We can also specify reg exp
    cname: {type:String, required:true},
    
    pwd: {type:String, required:true},
    // username : {type:String, required:true, unique:true},
    isDeleted : Boolean
    /* 
    When user was created
    createAt: Date,
    updatedAt : Date
    */
}, {
    timestamps: true
});
const registrationModel = mongoose.model("register", registerSchema);

module.exports = registrationModel;
