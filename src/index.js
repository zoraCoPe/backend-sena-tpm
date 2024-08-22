const express = require("express");

const app = express();

const mongoose = require("mongoose");

// importar ruta de usuaro
const userRoutes = require("./routes/user");
const personasRoutes = require("./routes/personas");
const profesionalessaludRoutes = require("./routes/profesionalessalud");
const pacientesRoutes = require("./routes/pacientes");



require("dotenv").config({
        path: "./src/.env"
});

const port = process.env.PORT || 9000;
app.listen(port,() => console.log("servidor ok",port));

//middleware
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", personasRoutes);
app.use("/api", profesionalessaludRoutes);
app.use("/api", pacientesRoutes);



//routes
app.get("/",(req, res)=> {
    res.send("API practica proyecto")
});


// conexion a la base de datos
mongoose.connect(process.env.BDMONGO_URI)
.then(()=> console.log("conexione stablecida"))
.catch ((error)=>console.log(error));

