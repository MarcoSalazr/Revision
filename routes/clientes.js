const router = require('express').Router();

router.get('/', (req, res) => {
    let respuesta = { tipo: 20, msg: 'Listado de todos los clientes' }
    res.json(respuesta);
});

router.get('/:idUser', (req, res) => {
    console.log(req.params.idUser);
    let respuesta = { tipo: 20, msg: 'Buscando un solo cliente' }
    res.json(respuesta);
})


router.post('/', (req, res) => {
    console.log(req.body);
    let respuesta = { tipo: 220, msg: 'Resultado de un post' };
    res.json(respuesta);
})



module.exports = router