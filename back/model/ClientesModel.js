const mongoose = require("mongoose");

const clientesSchema = mongoose.Schema({//creo un esquema y le digo q va a trabajr con esquemas de mongoose
  "nombres": String,
  "apellidos": String,
  "correo": String,
  //"grades": Array,
  //"name": String,
  //"restaurant_id": String
});

module.exports = mongoose.model("Clientes", clientesSchema);//exporta eso como modulo