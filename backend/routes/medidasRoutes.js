const express = require('express');
const router = express.Router();
const connection = require('../connection');


router.get('/', async (req, res) => {
    connection.query('SELECT * FROM medidas', function (error, results, fields) {
        if (error)
            throw error;

        res.send(results);
    });
})

router.delete(':id', async (req, res) => {
    console.log(req.params.id);
})

router.post("/create", async (req, res) => {
    try {
        /* const prod = new Product({
            nome: req.body.nome
        })

        const newProd = await prod.save();
        res.send(newProd); */

    } catch (error) {
        res.send({ message: error.message })
    }
})

module.exports = router;

