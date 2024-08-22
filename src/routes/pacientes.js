const express = require("express");
const router = express.Router();
const userSchema = require("../models/pacientes");   //aqui importo lo que exporte de pacente models

// Crear usuario
router.post("/pacientes",(req, res) => {
   const paciente  = userSchema(req. body);
   paciente.save()  // aqui guardo los datos del usuarios
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

// para obtener todos los usuarios usamos el metodo GET
router.get("/pacientes",(req, res) => {
        userSchema
        .find()  // se usa para encontrar o llamar un usuario
    .then((data) => res.json(data)) // si lo encuentra me trae la data de todos los user
    .catch((error) => res.json({message: error})); // si no me dara un error de respuesta
 });
 // de aqui router.get paso al requests.http
 
 
 // metodo para mostrar un usuario en especfico

 router.get("/paciente/:id",(req, res) => {
   const {id} = req.params; // me trae toda la data de un usuario usuario
   userSchema
    .findById(id) // va a encontrar basado en un id 
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));

 });

 // actulizar usuario u cambar datos
 router.put("/paciente/:id",(req, res) => {
   const {id:_id} = req.params; 
   const{    fechaDeNacimiento, edad, pesoInicial, pesoActual, estatura, indiceMasaCorporal} = req.body
   
   userSchema
   .updateOne({_id},{$set:{fechaDeNacimiento, edad, pesoInicial, pesoActual, estatura, indiceMasaCorporal}})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
 });

 // para eliminar un usuario hacemos lo siguiente 
 router.delete("/paciente/:id",(req, res) => {
   const {id} = req.params; 
   userSchema
   .deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

module.exports = router

