let mysql = require('../db/mysql');
module.exports = {
    crear: (req, res) => {
        console.log(req.body)
        mysql.query('INSERT INTO contacto SET?', req.body, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                console.log('Id de contacto registrado:' + results.insertId)
                res.json({ tipo: '200', msg: 'Se inserto de manera correcta' })
            }
        });
    },
    listar: (req, res) => {
        mysql.query('SELECT * FROM contacto', (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    },
    buscar: (req, res) => {
        mysql.query('SELECT * FROM contacto WHERE id=?', req.params.idcontacto, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    },
    borrar: (req, res) => {
        mysql.query('DELETE FROM contacto WHERE id=?', req.params.idcontacto, (error, results, fields) => {
            if (error) {
                res.json(error)
            } else {
                res.json(results)
            }
        });
    }
}