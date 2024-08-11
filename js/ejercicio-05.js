//5- Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edadl,dni, sexo, peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo
//Los metodos que se debe utilizar son:
//mostrarGeneracion: generacion a la que pertenece y rasgo caracteristicos
//tener en cuenta la tabla siguiente.
class Persona {
  #nombre;
  #edad1;
  #dni1;
  #sexo;
  #peso;
  #altura;
  #anioNac;
  constructor(nombre, edad1, dni1, sexo, peso, altura, anioNac) {
    this.#nombre = nombre;
    this.#edad1 = edad1;
    this.#dni1 = dni1;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNac = anioNac;
  }
  get nombre() {
    return this.#nombre;
  }
  get edad1() {
    return this.#edad1;
  }
  get dni1() {
    return this.dni1;
  }
  get sexo() {
    return this.#sexo;
  }
  get peso() {
    return this.#peso;
  }
  get altura() {
    return this.#altura;
  }
  get anioNac() {
    return this.#anioNac;
  }
  
}
