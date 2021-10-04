require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());//usa cors
app.use(express.json());//todos los obj q usaremos son de tipo json
app.use(express.urlencoded({extended: true}))//conf inicial basica

// rutas
app.use("/api",require("./routes/routes"));//toda esa info la escucha desde la api

// DB conexion con la base de datos de mongo
const mongoose = require("mongoose");
mongoose.connect(process.env.URI_DB)
  .then(() => console.log("Conexión OK con DB"))
  .catch(err => console.error(err));

const port = process.env.PORT;
app.listen(port, () => 
  console.log(`La aplicación esta escuchando en http://localhost:${port}`)//escuchando en local
)
