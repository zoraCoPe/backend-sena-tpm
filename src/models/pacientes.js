const mongoose = require("mongoose");
const pacientesSchema = mongoose.Schema({
  
    fechaDeNacimiento:{
        type:Date,
        required: true
    },
    edad:{
        type: Number,
        required: true
    },
    pesoInicial:{
        type: Number,
        required: true
        
    },
    pesoActual:{
        type: Number,
        required: true
    },
    estatura:{
        type: Number,
        required: true
    },
    indiceMasaCorporal:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("paciente", pacientesSchema);