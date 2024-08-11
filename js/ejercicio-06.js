//6- Crear una clase Libro que contenga al menos las siguientes propiedades:
//ISBN, Título, Autor, Número de páginas

//Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

//“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
//Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
//Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
class Libro {
  #isbn;
  #titulo;
  #autor;
  #numeroPagina;
  constructor(isbn, titulo, autor, numeroPagina) {
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numeroPagina = numeroPagina;
  }
  //ahora hago los getter y setter
  get isbn() {
    return this.#isbn;
  }
  get titulo() {
    return this.#titulo;
  }
  get autor() {
    return this.#autor;
  }
  get numeroPagina() {
    return this.#numeroPagina;
  }
  set isbn(nuevoIsbn) {
    if (nuevoIsbn > 0) {
      this.#isbn = nuevoIsbn;
    }
  }
  set titulo(nuevoTitulo) {
    if (nuevoTitulo.length > 0) {
      this.#titulo = nuevoTitulo;
    }
  }
  //hago el setter del autor pero no es una prpiedad que en la realidad deberia cambiar
  set autor(nuevoAutor) {
    if (nuevoAutor.length > 0) this.#autor = nuevoAutor;
  }
  set numeroPagina(nuevoNumeroPagina) {
    if (nuevoNumeroPagina > 0) {
      this.#numeroPagina = nuevoNumeroPagina;
    }
  }
  //metodo
  mostrarLibro() {
    document.write(
      `<p>El libro <strong>${this.titulo}</strong> con ISBN ${this.isbn} creado por ${this.autor} tiene ${this.numeroPagina} páginas.`
    );
  }
}
//ahora creo los objetos libros
const libro01 = new Libro(
  "9789877250954",
  "El Secreto de sus Ojos",
  "Eduardo Sacheri",
  320
);
const libro02 = new Libro(
  "9789500210133",
  "Mi Planta de Naranja-Lima",
  "Jose Mauro de Vasconcelos",
  240
);
const libro03 = new Libro(
  "9789877254518",
  "La Ciudad de las Bestias",
  "Isabel Allende",
  304
);

console.log(libro01);
console.log(libro02);
console.log(libro03);
document.write("<h2>Listado de libros disponibles: </h2>");
libro01.mostrarLibro();
libro02.mostrarLibro();
libro03.mostrarLibro();
if (
  libro03.numeroPagina > libro02.numeroPagina &&
  libro03.numeroPagina > libro01.numeroPagina
) {
  document.write(
    `<p>El libro ${libro03.titulo} es el que tiene mayor cantidad de paginas.</p>`
  );
} else if (
  libro01.numeroPagina > libro02.numeroPagina &&
  libro01.numeroPagina > libro03.numeroPagina
) {
  document.write(
    `<p>El libro ${libro01.titulo} es el que tiene mayor cantidad de paginas.</p>`
  );
} else {
  document.write(
    `<p>El libro ${libro01.titulo} es el que tiene mayor cantidad de paginas.</p>`
  );
}
