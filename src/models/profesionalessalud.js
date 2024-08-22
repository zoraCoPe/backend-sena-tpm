const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    especialidad:{
        type:String,
        required: true
    },
    sexo:{
        type: String,
        required: true
        
    },
    experiencia:{
        type: String,
        required:true
    },
   
                    
});
// debo exportalo para la creacion de usuarios basado en la varrable
// u objeto llamado userSchema

module.exports = mongoose.model("profesional_de_la_salud", userSchema);