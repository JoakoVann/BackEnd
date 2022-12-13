/* Imports */

import express from 'express';
import multer from 'multer';

/* Routes */

const app = express();
const routerProductos = express.Router();

app.use('/productos', routerProductos);
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

/* array de productos */

const productos = [];

/* multer */

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});

const upload = multer({storage: storage});

routerProductos.post('/subir', upload.single('miArchivo'), (req,res,next) => {
  const file = req.file;
  if(!file){
    const error = new Error('Producto no encontrado');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(`Archivo <b>${file.originalname}</b> subido con exito`);
});

routerProductos.get('/api/productos', (req, res) => {
  res.json(productos);
});

routerProductos.get('/api/prodcutos/:id', (req, res) =>{
  const id = req.params.id;
  const producto = productos.find((producto) => producto.id == id);
});

routerProductos.post('/api/productos', (req, res) => {
  const producto = req.body;
  productos.push(producto);
  res.json(producto);
});

routerProductos.put('/api/productos/:id', (req, res) => {
  const id = req.params.id;
  const producto = req.body;
  const index = productos.findIndex((producto)=> producto.id == id);
  productos[index] = producto;
  res.json(producto);
});

routerProductos.delete('/api/productos/:id', (req, res) => {
  const id = req.params.id;
  const index = productos.findIndex((producto)=> producto.id == id);
  productos.splice(index,1);
  res.json(productos);
});

const port = 8080;
const server = app.listen(port, () =>{
  console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on('error', error => {console.log(`error en servidor ${error}`)});