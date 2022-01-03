var express = require('express');
var app = express();
const Sequelize = require('sequelize')


app.use(express.json());
app.listen(5000);
console.log('¡Server Started in Port 5000!');

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



// Models to include things in the database (PostgreSQL Local)

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
  campana: { type: Sequelize.STRING, allowNull: true },
  producto: { type: Sequelize.STRING, allowNull: true },
  cantidad: { type: Sequelize.STRING, allowNull: true },
  personal: { type: Sequelize.STRING, allowNull: true },
  maquinaria: { type: Sequelize.STRING, allowNull: true },
});

const Parcelas = sequelize.define('parcelas', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: Sequelize.STRING, allowNull: false },
  superficie: { type: Sequelize.STRING, allowNull: false },
  cultivos: { type: Sequelize.STRING, allowNull: false },
  grupos: { type: Sequelize.STRING, allowNull: false },
  recintos: { type: Sequelize.STRING, allowNull: false },
})


const Datos = sequelize.define('datos', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: Sequelize.STRING, allowNull: false },
  apellido1: { type: Sequelize.STRING, allowNull: false },
  apellido2: { type: Sequelize.STRING, allowNull: false },
  razonsocial: { type: Sequelize.STRING, allowNull: false },
  dni: { type: Sequelize.STRING, allowNull: false },
  direccion: { type: Sequelize.STRING, allowNull: false },
  poblacion: { type: Sequelize.STRING, allowNull: false },
  telefono: { type: Sequelize.STRING, allowNull: false },
  correo: { type: Sequelize.STRING, allowNull: false },
  localizacion: { type: Sequelize.STRING, allowNull: false },
  codigoexplotacion: { type: Sequelize.STRING, allowNull: false },
  carnet: { type: Sequelize.STRING, allowNull: false },
})

const Almacen = sequelize.define('almacen', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: Sequelize.STRING, allowNull: false },
  direccion: { type: Sequelize.STRING, allowNull: false }
})

const AlmacenProductos = sequelize.define('productosalmacen', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  producto: { type: Sequelize.STRING, allowNull: false },
  cantidad: { type: Sequelize.STRING, allowNull: false },
  almacen: { type: Sequelize.STRING, allowNull: false }
})


// Whith .sync() -> create the tables in the database

Personas.sync()
Maquinaria.sync() -
  Producto.sync()
Actividad.sync()
Parcelas.sync()
Datos.sync()
Almacen.sync()
AlmacenProductos.sync()


// ------- ***** ------------- ******
//  The endpoints of the api
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
    numexplotacion: req.body.numexplotacion,
    trabajo: req.body.trabajo,
    parcela: req.body.parcela,
    cultivo: req.body.cultivo,
    campana: req.body.campana,
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
    res.send(parcelas)
  })
})

app.get('/parcelas/:id', (req, res) => {
  Parcelas.findAll({
    where: {
      id: req.params.id
    }
  }).then(parcelas => {
    if (!parcelas) {
      res.send("No existe la parcela")
    } else {
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


app.post('/datos', (req, res) => {

  const datos = {
    nombre: req.body.nombre,
    apellido1: req.body.apellido1,
    apellido2: req.body.apellido2,
    dni: req.body.dni,
    razonsocial: req.body.razonsocial,
    dni: req.body.dni,
    direccion: req.body.direccion,
    poblacion: req.body.poblacion,
    telefono: req.body.telefono,
    correo: req.body.correo,
    localizacion: req.body.localizacion,
    codigoexplotacion: req.body.codigoexplotacion,
    carnet: req.body.carnet
  }

  Datos.create(datos).then(datos => {
    res.send(datos)
  })

})

app.get('/datos', (req, res) => {
  Datos.findAll().then(datos => {
    res.send(datos)
  })
})


app.post('/almacen', (req, res) => {
  const almacen = {
    nombre: req.body.nombre,
    direccion: req.body.direccion,
  }
  Almacen.create(almacen).then(almacen => {
    res.send(almacen)
  })

})

app.get('/almacen', (req, res) => {
  Almacen.findAll().then(almacen => {
    res.send(almacen)
  })
})

// Get almacen by id
app.get('/almacen/:id', (req, res) => {
  Almacen.findAll({
    where: {
      id: req.params.id
    }
  }).then(almacen => {
    if (!almacen) {
      res.send("No existe el almacen")
    } else {
      res.send(almacen)
    }
  })
})

app.post('/almacenproductos', (req, res) => {
  const almacenproductos = {
    almacen: req.body.almacen,
    producto: req.body.producto,
    cantidad: req.body.cantidad,
  }
  AlmacenProductos.create(almacenproductos).then(almacenproductos => {
    res.send(almacenproductos)
  }
  )
})

app.get('/almacenproductos', (req, res) => {
  AlmacenProductos.findAll().then(almacenproductos => {
    res.send(almacenproductos)
  })
})


// ------- ***** ------------- ******


trabajos = [
  {
    id: 1,
    name: "Abonar",
  },
  {
    id: 2,
    name: "Cosechar o Recolectar",
  },
  {
    id: 3,
    name: "Otros Trabajos",
  },
  {
    id: 4,
    name: "Otros trabajos de cultivo",
  },
  {
    id: 5,
    name: "Poda de Fructificación",
  },
  {
    id: 6,
    name: "Poda de Producción",
  },
  {
    id: 7,
    name: "Poda en Verde",
  },
  {
    id: 8,
    name: "Preparar el terreno",
  },
  {
    id: 9,
    name: "Sembrar o Plantar",
  },
  {
    id: 10,
    name: "Tratamiento Fitosanitario",
  },
  {
    id: 11,
    name: "Tratamiento Fitosanitario a almacén",
  },
  {
    id: 12,
    name: "Tratamiento Fitosanitario a medio de transporte",
  },
  {
    id: 13,
    name: "Tratamiento fitosanitario a postcosecha",
  },
  {
    id: 14,
    name: "Tratamiento Fitosanitario a semilla",
  },
  {
    id: 15,
    name: "Tratamiento no quimico",
  },
]

app.get('/trabajos', (req, res) => {
  res.send(trabajos)
})
