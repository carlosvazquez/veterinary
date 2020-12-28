/* Alumno Alfonso Martínez Juárez UNIR */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {titulo: ""})
  })
  
router.get('/servicios', (req, res) => {
      res.render("servicios", { tituloServicios: "Este es un mensaje dinámico de servicios"})
    })
  
router.get('/nosotros', (req, res) => {
      res.render("nosotros", {tituloNosotros: "Este es un mensaje dinámico de nosotros"})
    })

module.exports = router;