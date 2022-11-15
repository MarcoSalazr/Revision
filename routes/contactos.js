const router = require('express').Router();
let contactosController = require('../controllers/contactosController')

router.get('/', (req, res) => {
    //let responder = { tipo: 10, msg: 'Se devuelve todos los contactos' }
    // res.json(responder);
    contactosController.listar(req, res);
})

router.get('/:idcontacto', (req, res) => {
    //let respuesta = { tipo: 200, msg: `Cliente con ID ${req.params.idcontacto}` }
    contactosController.buscar(req, res);
    // res.json(respuesta);
})

router.post('/', (req, res) => {
    //let respuesta = { tipo: 200, msg: 'Post a contactos' }
    // res.json(respuesta);
    contactosController.crear(req, res);
})

router.delete('/', (req, res) => {
    //let respuesta = { tipo: 'woo', msg: 'delete a contactos' }
    //res.json(respuesta);
    contactosController.borrar(req, res);
})

module.exports = router;