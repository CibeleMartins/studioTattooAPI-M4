const {Router} = require("express");
const { listaTodosReg } = require("../controllers/atendimentosController");

const atendimentosController = require("../controllers/atendimentosController");

const router = Router();

router.get("/atendimentos", atendimentosController.listaTodosReg);

router.get("/atendimentos/:id", atendimentosController.listaUm);

router.post("/atendimentos", atendimentosController.insereRegistro);

router.patch("/atendimentos/:id", atendimentosController.atualizaRegistro);

router.delete("/atendimentos/:id", atendimentosController.deletaRegistro);


module.exports = router;