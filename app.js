/* Alumno Alfonso Martínez Juárez UNIR */
/* index.js es el encargado de arrancar la aplicación, la base de satos y servidor, así como otras configuraciones básicas*/

const express = require('express')
const app = express();

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));

//Conexión a base de datos
const mongoose = require('mongoose');

const user = 'alfonsomartinez';
const password = 'Q3rIiE5oY8nEHEtK';
const dbname = 'veterinaria'
const uri = `mongodb+srv://${user}:${password}@cluster0.fn8j8.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri, 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))

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
