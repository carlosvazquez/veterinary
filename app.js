/* Alumno Alfonso Martínez Juárez UNIR */
/* index.js es el encargado de arrancar la aplicación, la base de satos y servidor, así como otras configuraciones básicas*/

// Requerimientos
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT || 4000;
app.use(express.static(__dirname + "/public"));

//Conexión a base de datos

const user = 'alfonsomartinez';
const password = 'Q3rIiE5oY8nEHEtK';
const dbname = 'veterinaria'
const uri = `mongodb+srv://${user}:${password}@cluster0.r88xj.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect('mongodb+srv://alfonsomartinez:Q3rIiE5oY8nEHEtK@cluster0.r88xj.mongodb.net/veterinaria?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Rutas Web
app.use('/', require('./router/RutasWeb'))
app.use('/mascotas', require('./router/Mascotas'))

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Título del sitio web"
    })
})

app.listen(port, () => {
  console.log(`Servidor a su servicio en el puerto`, port)
})
