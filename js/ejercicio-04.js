//4- Escribe una  clase producto para crear objetos. Esps bojetos, deben presentar las propiedades codigo, nombre y precio. Ademas del metodo imprime datos, el cual escribe por pantalla los valores de sus propiedades.
//Posteriormente, cree tres instancias de este objeto y guardalas en un array.
//por ultimo, utilice el metodo imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
class Producto {
  #codigo;
  #nombre;
  #precio;
  constructor(codigo, nombre, precio) {
    (this.#codigo = codigo), (this.#nombre = nombre), (this.#precio = precio);
  }
  //ahora hago los getter y setter
  get codigo() {
    return this.#codigo;
  }

  get nombre() {
    return this.#nombre;
  }

  get precio() {
    return this.#precio;
  }

  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }

  //ahora hago los metodos
  listaDatos() {
    document.write(
      `<ul><li>Código: ${this.#codigo}</li><li>Nombre: ${
        this.#nombre
      }</li><li>Precio: ${this.#precio}</li></ul>`
    );
  }
}
const listaLibro = {
  listadoCompleto: ["El Principito", " Mujercitas", " Pulgarcito"],
  mostarListado: function () {
    document.write(
      `<h2>Este es el listado completo de libros: ${this.listadoCompleto}</h2>`
    );
  },
};

//ahora hago instancio los objetos
const elPrincipito = new Producto("libros001", "El Principito", "$5000");
const mujercitas = new Producto("libros002", "Mujercitas", "$6500");
const pulgarcito = new Producto("libros003", "Pulgarcito", "$3000");
console.log(elPrincipito);
console.log(mujercitas);
console.log(pulgarcito);

//ahora llamo a los metodos
console.log(listaLibro);
listaLibro.mostarListado();
elPrincipito.listaDatos();
mujercitas.listaDatos();
pulgarcito.listaDatos();
