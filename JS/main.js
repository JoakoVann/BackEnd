// class Usuario {
//   constructor(nombre,apellido,libros,mascotas) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.libros = libros;
//     this.mascotas = mascotas;
//   }

//   getFullName() {
//     return(`Hola ${this.nombre} ${this.apellido}`);
//   };
//   addMascota(mascota){
//     this.mascotas.push(mascota);
//   };
//   countMascotas(){
//     return(this.mascotas.length);
//   };

//   addBook(book,autor){
//     this.libros.push({nombre: book,autor: autor});
//   };
//   getBookNames(){
//     return(this.libros.map((libro) => libro.nombre));
//   };
// }

// const usuario = new Usuario('Juan','Perez',['El principito','El aleph'],['Perro','Gato']);
// usuario.getFullName();
// usuario.addMascota('Pez');
// usuario.countMascotas();
// usuario.addBook('El señor de los anillos','J.R.R. Tolkien');
// usuario.getBookNames();

// console.log(usuario);

const fs = require('fs');



class contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  };

  save(Object){ 
    fs.readFile(this.nombreArchivo, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error al leer el archivo', err);
        return;
      }
      let array = [];
      if (data) {
        array = JSON.parse(data);
      }
      array.push(Object);
      fs.writeFile(this.nombreArchivo, JSON.stringify(array, null, 2), (err) => {
        if (err) {
          console.log('Error al escribir el archivo', err);
          return;
        }
        console.log('Se ha guardado el archivo');
      });
    });
  }

  getById(id){
    fs.readFile(this.nombreArchivo, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error al leer el archivo', err);
        return;
      }
      let array = [];
      if (data) {
        array = JSON.parse(data);
      }
      const objeto = array.find((objeto) => objeto.id === id);
      console.log(objeto);
    });
  }

  getAll(){
    fs.readFile(this.nombreArchivo, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error al leer el archivo', err);
        return;
      }
      let array = [];
      if (data) {
        array = JSON.parse(data);
      }
      console.log(array);
    });
  }

  deleteById(id){
    fs.readFile(this.nombreArchivo, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error al leer el archivo', err);
        return;
      }
      let array = [];
      if (data) {
        array = JSON.parse(data);
      }
      const index = array.findIndex((objeto) => objeto.id === id);
      array.splice(index, 1);
      fs.writeFile(this.nombreArchivo, JSON.stringify(array, null, 2), (err) => {
        if (err) {
          console.log('Error al escribir el archivo', err);
          return;
        }
        console.log('Se ha guardado el archivo');
      });
    });
  }

  deleteAll(){
    fs.writeFile(this.nombreArchivo, '', (err) => {
      if (err) {
        console.log('Error al escribir el archivo', err);
        return;
      }
      console.log('Se ha guardado el archivo');
    });
  }
}

const contenedor1 = new contenedor('productos.txt');
contenedor1.save({id: 1, title: 'Escuadra', price: 123.45, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png'});
contenedor1.save({id: 2, title: 'Calculadora', price: 234.56, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png'});
contenedor1.save({id: 3, title: 'Globo Terráqueo', price: 345.67, thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png'});
contenedor1.getById(2);
contenedor1.getAll();
contenedor1.deleteById(1);
contenedor1.getAll();
contenedor1.deleteAll();