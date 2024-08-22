const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");    //aqui importo lo que exporte de user models

// para obtener todos los usuarios usamos el metodo GET

router.get("/users",(req, res) => {
        
  userSchema
        .find()  // se usa para encontrar o llamar un usuario
      .then((data) => res.json(data)) // si lo encuentra me trae la data de todos los user
    .catch((error) => res.json({message: error})); // si no me dara un error de respuesta
 });

// Crear usuario
router.post("/users",(req, res) => {
  try {
    const user = userSchema(req.body);
      user.save()  // aqui guardo los datos del usuarios
      .then((data) => res.json(data))
      .catch((error) => res.json({message: error}));
  } catch (e) {
    console.log(e);
    res.json({message: e.message})
    
  }
});
 
 
 // metodo para mostrar un usuario en especfico

 router.get("/user/:id",(req, res) => {
   const {id} = req.params; // me trae toda la data de un usuario usuario
   userSchema
    .findById(id) // va a encontrar basado en un id 
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

 // actulizar usuario u cambar datos
 router.put("/user/:id", async (req, res) => {
   const {id} = req.params;
   const {name, email, profesion} = req.body

   let user = await userSchema.findById(id)

   console.log(user)

   userSchema
   .updateOne({_id : id},{$set:{name, email, profesion}})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
 });

 // para eliminar un usuario hacemos lo siguiente 
 router.delete("/user/:id",(req, res) => {
   const {id} = req.params; 
   userSchema
   .deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });

module.exports = router





