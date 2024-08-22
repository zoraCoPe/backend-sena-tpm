const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
        
    },
    profesion:{
        type: String,
        required: true
    },
            
});
// debo exportalo para la creacion de usuarios basado en la varrable
// u objeto llamado userSchema

module.exports = mongoose.model("user", userSchema);