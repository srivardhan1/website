var userModel=require('../models/registerModel');
module.exports.mailCheck=function(userJson,cb){
    var query = {email: userJson.email}
    userModel.find(query,function(err,collections){
        var response = {success: false, message: 'Registration Successful', user: null };
        if(err){
            response.message = 'Server Side Error Occured, Try again after some time';
            return cb(response);
        }
        if(collections.length==0){
            response.message = 'Registration Successful';
            return cb(response);
        }
        response.success = true;
        response.message = 'Email Id already registered';
        cb(response);
    })

}
module.exports.isUserValid=function(userJson,cb){
    var query = {username: userJson.username, password:userJson.password, isDeleted:{$ne : true}};

    userModel.find(query, function(err, collections){
        var response = {success: false, message: 'Login Failed', user: null };
        if(err){
            response.message = 'Server Side Error Occured, Try again after some time';
            return cb(response);
        }
        if(collections.length==0){
            response.message = 'Invalid username/password';
            return cb(response);
        }
        response.success = true;
        response.message = 'Login SuccessFul';
        response.user = {username: collections[0].username,phonenumber: collections[0].phonenumber,date:collections[0].date,email:collections[0].email};
        cb(response);
    })
}