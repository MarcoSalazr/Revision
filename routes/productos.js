const router = require('express').Router();

router.get('/', (req, res) => {
    let responder = { tipo: 10, msg: 'Se devuelve todos los productos' }
    res.json(responder);
})

router.get('/:idProducto', (req, res) => {
    let respuesta = { producto: 'Tamalito', msj: 'Es de carne', id: req.params.idProducto }
    res.json(respuesta);
})



module.exports = router;