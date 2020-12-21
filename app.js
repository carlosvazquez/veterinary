/* Alumno Alfonso Martínez Juárez UNIR */
/* index.js es el encargado de arrancar la aplicación, la base de satos y servidor, así como otras configuraciones básicas*/

const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render("index", {titulo: ""})
})

app.get('/servicios', (req, res) => {
    res.render("servicios", { tituloServicios: "Este es un mensaje dinámico de servicios"})
  })



app.get('/nosotros', (req, res) => {
    res.render("nosotros", {tituloNosotros: "Este es un mensaje dinámico de nosotros"})
  })

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Título del sitio web"
    })
})

app.listen(port, () => {
  console.log(`Servidor a su servicio en el puerto`, port)
})
