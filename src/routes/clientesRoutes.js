const {Router} = require("express");
const { listaTodosReg } = require("../controllers/clientesController");

const clientesController = require("../controllers/clientesController");

const router = Router();

router.get("/clientes", clientesController.listaTodosReg);

router.get("/clientes/:id", clientesController.listaUm);

router.post("/clientes", clientesController.insereRegistro);

router.patch("/clientes/:id", clientesController.atualizaRegistro);

router.delete("/clientes/:id", clientesController.deletaRegistro);


module.exports = router;