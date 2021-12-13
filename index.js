var express = require('express');
var app = express();
var explotaciones = require('./explotaciones');
const Sequelize = require('sequelize')


app.use(express.json());

// Iniciar servidor
app.listen(5000);
console.log('¡Servidor iniciado en el puerto 5000!');

// Database Options
const user = 'postgres'
const host = 'localhost'
const database = 'cuadernodecampo'
const password = 'tycgis'
const port = '5432'

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})

// check if connection is established
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database')
  })



// Modelos

const Personas = sequelize.define('personas', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: Sequelize.STRING, allowNull: false },
  dni: { type: Sequelize.STRING, allowNull: false },
  tipo: { type: Sequelize.STRING, allowNull: false },
  telefono: { type: Sequelize.INTEGER, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  fitosanitario: { type: Sequelize.BOOLEAN, allowNull: true },
  nif: { type: Sequelize.INTEGER, allowNull: true },
  ropo: { type: Sequelize.INTEGER, allowNull: true },
  carnet: { type: Sequelize.STRING, allowNull: true },
})


const Maquinaria = sequelize.define('maquinaria', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: Sequelize.STRING, allowNull: false },
  tipo: { type: Sequelize.STRING, allowNull: false },
  matricula: { type: Sequelize.STRING, allowNull: false },
  propiedad: { type: Sequelize.STRING, allowNull: false },
  mantenimiento: { type: Sequelize.STRING, allowNull: false }
})


const Producto = sequelize.define('producto', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  tipo: { type: Sequelize.STRING, allowNull: false },
  nombre: { type: Sequelize.STRING, allowNull: false },
  concentracion: { type: Sequelize.STRING, allowNull: false },
  cantidad: { type: Sequelize.STRING, allowNull: false },
})

const Actividad = sequelize.define('actividad', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  datestart: { type: Sequelize.DATE, allowNull: true },
  dateend: { type: Sequelize.DATE, allowNull: true },
  tiempo: { type: Sequelize.STRING, allowNull: true },
  trabajo: { type: Sequelize.STRING, allowNull: true },
  numexplotacion: { type: Sequelize.INTEGER, allowNull: true },
  parcela: { type: Sequelize.STRING, allowNull: true },
  cultivo: { type: Sequelize.STRING, allowNull: true },
  capana: { type: Sequelize.STRING, allowNull: true },
  producto: { type: Sequelize.STRING, allowNull: true },
  cantidad: { type: Sequelize.STRING, allowNull: true },
  personal: { type: Sequelize.STRING, allowNull: true },
  maquinaria: { type: Sequelize.STRING, allowNull: true },
});


// const Parcelas = sequelize.define('parcelas', {
//   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
//   nombre_recinto: { type: Sequelize.STRING, allowNull: false },
//   pac_ano: { type: Sequelize.STRING, allowNull: false },
//   pac_nombre: { type: Sequelize.STRING, allowNull: false },
//   pac_nif: { type: Sequelize.STRING, allowNull: false },
  
//   sigpac_provincia: { type: Sequelize.STRING, allowNull: false },
//   sigpac_municipio: { type: Sequelize.STRING, allowNull: false },
//   sigpcac_agredado: { type: Sequelize.STRING, allowNull: false },
//   sigppac_zona: { type: Sequelize.STRING, allowNull: false },
//   sigpac_poligono: { type: Sequelize.STRING, allowNull: false },
//   sigpac_parcela: { type: Sequelize.STRING, allowNull: false },
//   sigpac_recinto: { type: Sequelize.STRING, allowNull: false },
//   sigpac_uso: { type: Sequelize.STRING, allowNull: false },
//   sigpac_hatotales: { type: Sequelize.STRING, allowNull: false },
//   sigpac_hadeclaradas: { type: Sequelize.STRING, allowNull: false },
  
//   cultivo: { type: Sequelize.STRING, allowNull: false },
//   variedad: { type: Sequelize.STRING, allowNull: false },
//   zonaespecifica: { type: Sequelize.STRING, allowNull: false },
//   zonavulnerable: { type: Sequelize.STRING, allowNull: false },
//   cultivopermanente: { type: Sequelize.STRING, allowNull: false },
//   sistemacertificacion: { type: Sequelize.STRING, allowNull: false },
//   secano_regadio: { type: Sequelize.STRING, allowNull: false }
// })

const Parcelas = sequelize.define('parcelas', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: Sequelize.STRING, allowNull: false },
  superficie: { type: Sequelize.STRING, allowNull: false },
  cultivos: { type: Sequelize.STRING, allowNull: false },
  grupos: { type: Sequelize.STRING, allowNull: false },
  recintos: { type: Sequelize.STRING, allowNull: false },
})




// Put tables into the database

Personas.sync()
Maquinaria.sync()
Producto.sync()
Actividad.sync()
Parcelas.sync()


// ------- ***** ------------- ******


app.get('/', (req, res) => {
  res.send('Api Funcionando!');
});


app.get('/personal', (req, res) => {
  Personas.findAll().then(personas => {
    res.send(personas)
  })
})

app.post('/personal', (req, res) => {
  Personas.create({
    nombre: req.body.nombre,
    dni: req.body.dni,
    tipo: req.body.tipo,
    telefono: req.body.telefono,
    email: req.body.email,
    fitosanitario: req.body.fitosanitario,
    nif: req.body.nif,
    ropo: req.body.ropo,
    carnet: req.body.carnet
  }).then(persona => {
    res.send(persona)
  })
})


app.get('/maquinaria', (req, res) => {
  Maquinaria.findAll().then(maquinaria => {
    res.send(maquinaria)
  })
})

app.post('/maquinaria', (req, res) => {

  Maquinaria.create({
    nombre: req.body.name,
    tipo: req.body.tipo,
    matricula: req.body.matricula,
    propiedad: req.body.propiedad,
    mantenimiento: req.body.mantenimiento
  }).then(maquinaria => {
    res.send(maquinaria)
  })
})


app.get('/productos', (req, res) => {
  Producto.findAll().then(producto => {
    res.send(producto)
  })
})

app.post('/productos', (req, res) => {
  const producto = {
    tipo: req.body.tipo,
    nombre: req.body.nombre,
    concentracion: req.body.concentracion,
    cantidad: req.body.cantidad
  }

  Producto.create(producto).then(producto => {
    res.send(producto)
  })
})

app.get('/producto', (req, res) => {
  Producto.findAll().then(producto => {
    res.send(producto)
  })
})


app.get('/actividades', (req, res) => {
  Actividad.findAll().then(actividad => {
    res.send(actividad)
  })
})

app.post('/actividades', (req, res) => {
  const actividad = {
    datestart: req.body.datestart,
    dateend: req.body.dateend,
    tiempo: req.body.tiempo,
    nombre: req.body.nombre,
    numeroExplotacion: req.body.numeroExplotacion,
    parcela: req.body.parcela,
    cultivo: req.body.cultivo,
    camapa: req.body.camapa,
    producto: req.body.producto,
    cantidad: req.body.cantidad,
    personal: req.body.personal,
    maquinaria: req.body.maquinaria
  }

  Actividad.create(actividad).then(actividad => {
    res.send(actividad)
  })
})


app.post('/parcelas', (req, res) => {
  const parcelas = {
    nombre: req.body.nombre,
    superficie: req.body.superficie,
    cultivos: req.body.cultivos,
    grupos: req.body.grupos,
    recintos: req.body.recintos
  }

  Parcelas.create(parcelas).then(parcelas => {
    res.send(parcelas)
  })
})

app.get('/parcelas', (req, res) => {
  Parcelas.findAll().then(parcelas => {
    res.send(parcelas)})
})

app.get('/parcelas/:id', (req, res) => {
  Parcelas.findAll({
    where: {
      id: req.params.id
    }
  }).then(parcelas => {
    if(! parcelas) {
      res.send("No existe la parcela")
    }else {
    res.send(parcelas)
    }
  })
})

app.delete('/parcelas/:id', (req, res) => {
  Parcelas.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.sendStatus(200)
  }).catch(() => {
    res.sendStatus(500)
  })
})

// // Edit parcelas by id with query params
// app.put('/parcelas/:id', (req, res) => {
//   Parcelas.update({
//     nombre: req.body.nombre,
//     superficie: req.body.superficie,
//     cultivos: req.body.cultivos,
//     grupos: req.body.grupos,
//     recintos: req.body.recintos
//   },{
//     where: {
//       id: req.params.id
//     }
//   }).then(parcelas => {
//     res.send(parcelas)
//   })
// })
