const express = require("express");
const router = express.Router();

// aqui importo lo que exporte de personas models linea 31 32
const personasSchema = require("../models/personas");

// Crear usuario
router.post("/personas",(req, res) => {
   const user = personasSchema(req. body);
   user.save()  // aqui guardo los datos del usuarios
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
});

// para obtener todos los usuarios usamos el metodo GET
router.get("/personas",(req, res) => {
    personasSchema
        .find()  // se usa para encontrar o llamar un usuario
    .then((data) => res.json(data)) // si lo encuentra me trae la data de todos los user
    .catch((error) => res.json({message: error})); // si no me dara un error de respuesta
 });
 // de aqui router.get paso al requests.http
 
 
 // metodo para mostrar un usuario en especfico

 router.get("/persona/:id",(req, res) => {
   const {id} = req.params; // me trae toda la data de un usuario usuario
   personaSchema
   .findById(id) // va a encontrar basado en un id 
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));

 });

 // actulizar usuario u cambar datos
 router.put("/personas/:id",(req, res) => {
   const {id: _id} = req.params;
   const {name, apellido, email, direccion, telefono} = req.body

   personaSchema
   .updateOne({_id},{$set:{name, email, apellido, direccion, telefono}})
   .then((data) => res.json(data))
   .catch((error) => res.json({message: error}));
 });

 // para eliminar un usuario hacemos lo siguiente 
 router.delete("/personas/:id",(req, res) => {
   const {id} = req.params; 
   personaSchema
   .deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
 });
 router.post("/personas/login",async(req, res)=>{   // CREO LA  RUTA para INGRESAR el password
  const {username,password} = req.body;
  const usuariodb= await personasSchema.
  findOne({email:username}).select("+password") //traiga el usuario pero incluya la contraseña
  .exec();
  console.log(usuariodb)
  if(!usuariodb || (usuariodb && usuariodb.password != password)){
    res.json({ 
      ok:false     // me responde falso si meto la contraseña equivocada
    }) 
  }else{res.json({
    ok:true         // me responde verdadero o me deja ingresar si los datos son correctos
  })

  }
  
 })

module.exports = router
