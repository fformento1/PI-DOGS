const { Router } = require("express");
const dogsRouter = require("./Dogs");
const temperamentRouter = require("./Temperaments");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/dogs", dogsRouter);
router.use("/temperaments", temperamentRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
