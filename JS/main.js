class Usuario {
  constructor(nombre,apellido,libros,mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  };
  addMascota(mascota){
    this.mascotas.push(mascota);
  };
  countMascotas(){
    console.log(this.mascotas.length);
  };

  addBook(book,autor){
    this.libros.push({nombre: book,autor: autor});
  };
  getBookNames(){
    console.log(this.libros.map((libro) => libro.nombre));
  };
}

const usuario = new Usuario('Juan','Perez',['El principito','El aleph'],['Perro','Gato']);
usuario.getFullName();
usuario.addMascota('Pez');
usuario.countMascotas();
usuario.addBook('El señor de los anillos','J.R.R. Tolkien');
usuario.getBookNames();

console.log(usuario);