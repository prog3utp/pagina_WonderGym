const express = require("express");
const clientesController = require("../controller/ClientesController");

const router = express.Router();

// Rutes clientes
router.get("/clientes/all", clientesController.getAll);//cuando me haga una peticion get con esa url se va a clientescontroller y da todos los datos
router.get("/clientes/:id", clientesController.getById);//cuando le pase id se lo trae
router.get("/clientes/:param1/:param2", clientesController.getP12);
router.delete("/clientes/:id", clientesController.deleteById);
router.post("/clientes/", clientesController.create);//quiero hacer una creacion en el doc
router.put("/clientes/:id/:val", clientesController.updateById);
router.put("clientes/:id", clientesController.replaceById);

module.exports = router;
