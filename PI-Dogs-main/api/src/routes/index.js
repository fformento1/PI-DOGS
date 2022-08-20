const { Router } = require('express');
const dogsRouter = require('./Dogs')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/dogs', dogsRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
