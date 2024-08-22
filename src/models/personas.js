const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    apellido:{
        type: String,
        required: true
        
    },
    id:{
        type: Number,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    direccion:{
        type: String,
        required: true
        
    },
    telefono:{
        type: Number,
        required: true
    },
    
    password:{
    type: String,
    required: true,
    select:false
    },
    
    
});
// debo exportalo para la creacion de usuarios basado en la varrable
// u objeto llamado userSchema

module.exports = mongoose.model("persona", userSchema);