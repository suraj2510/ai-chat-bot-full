//surajmaurya1335_db_user
//vYco5TQtpZOAWynx
//mongodb+srv://surajmaurya1335_db_user:vYco5TQtpZOAWynx@cluster0.14vxmyc.mongodb.net/


//User Schema

const mongoose= require("mongoose")
const UserSchema= new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
},{timestamps:true});

module.exports=mongoose.model("User", UserSchema)