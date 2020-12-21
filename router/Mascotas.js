const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: '0001', nombre: 'Jack', descrpcion: 'perro chihuahua'},
            {id: '0002', nombre: 'Fpsky', descrpcion: 'perro pastor'},
            {id: '0003', nombre: 'Lady', descrpcion: 'perro salchica'},

        ]
    })

})

module.exports = router;