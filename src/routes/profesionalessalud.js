const express = require("express");
const router = express.Router();

// aqui importo lo que exporte de personas models linea 31 32
const profesionalessaludSchema = require("../models/profesionalessalud");

// Crear usuario
router.post("/profesionalessalud",(req, res) => {
   const user = profesionalessaludSchema(req. body);
   user.save()  // aqui guardo los datos del usuarios
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});
// para obtener todos los usuarios usamos el metodo GET
router.get("/profesionalessalud",(req, res) => {
        profesionalessaludSchema
        .find()  // se usa para encontrar o llamar un usuario
    .then((data) => res.json(data)) // si lo encuentra me trae la data de todos los user
    .catch((error) => res.json({message: error})); // si no me dara un error de respuesta
 });
 // de aqui router.get paso al requests.http
  
 // metodo para mostrar un usuario en especfico

 router.get("/profesionalsalud/:id",(req, res) => {
   const {id} = req.params; // me trae toda la data de un usuario usuario
   profesionalessaludSchema
   .findById(id) // va a encontrar basado en un id 
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));

 });

 // actulizar usuario u cambar datos
 router.put("/profesionalsalud/:id",(req, res) => {
   const {id} = req.params; 
   const {especialidad, sexo, experiencia} = req.body
   
   profesionalessaludSchema
   .updateOne({_id : id},{$set:{especialidad, sexo, experiencia}})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
 });

 // para eliminar un usuario hacemos lo siguiente 
 router.delete("/profesionalsalud/:id",(req, res) => {
   const {id} = req.params; 
   profesionalessaludSchema
   .deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

module.exports = router
