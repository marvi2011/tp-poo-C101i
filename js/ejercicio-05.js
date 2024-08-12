//5- Crea una clase llamada Persona que siga las siguientes condiciones:
//Sus propiedades son: nombre, edadl,dni, sexo, peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo
//Los metodos que se debe utilizar son:
//mostrarGeneracion: generacion a la que pertenece y rasgo caracteristicos
//tener en cuenta la tabla siguiente.
/*esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */
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
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNac = anioNac;
  }
  get nombre() {
    return this.#nombre;
  }
  get edad1() {
    return this.#edad1;
  }
  get dni1() {
    return this.#dni1;
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
  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    }
  }
  set edad1(nuevaEdad) {
    if (nuevaEdad > 0 && nuevaEdad < 100) {
      this.#edad1 = nuevaEdad;
    }
  }
  set dni1(nuevoDni) {
    if (nuevoDni > 0 || nuevoDni < 99999999) {
      this.#dni1 = nuevoDni;
    }
  }
  set sexo(nuevoSexo) {
    if (nuevoSexo == H || nuevoSexo == M) {
      this.#sexo = nuevoSexo;
    }
  }
  set peso(nuevoPeso) {
    if (nuevoPeso > 0) {
      this.#peso = nuevoPeso;
    }
  }
  set altura(nuevaAltura) {
    if (nuevaAltura > 0 && nuevaAltura < 220) {
      this.#altura = nuevaAltura;
    }
  }
  set anioNac(nuevoAnioNac) {
    if (nuevoAnioNac > 0) {
      this.#anioNac = nuevoAnioNac;
    }
  }
  //metodos
  mostrarGeneracion() {
    if (this.#anioNac >= 1930 && this.#anioNac <= 1948) {
      document.write(
        "<lu><li>Pertence a la Generación 'Silent Generation (niños post-guerra)'</li><li>Comprende a los nacidos entre 1930 y 1948</li><li>La población en esa generación era de 6.300.000 habitantes</li><li>La epoco estuvo marcada por confictos belicos</li><li>El rasgo catacteristico de este generacion es la austeridad</li>"
      );
    } else if (this.#anioNac >= 1949 && this.#anioNac <= 1968) {
      document.write(
        "<lu><li>Pertence a la Generación 'Baby boom'</li><li>Comprende a los nacidos entre 1949 y 1968</li><li>La población en esa generación era de 12.200.000 habitantes</li><li>La epoca estuvo marcada por la paz y una explosion demografica</li><li>El rasgo catacteristico de este generacion es la ambicion</li>"
      );
    } else if (this.#anioNac >= 1969 && this.#anioNac <= 1980) {
      document.write(
        "<lu><li>Pertence a la Generación 'X'</li><li>Comprende a los nacidos entre 1969 y 1980</li><li>La población en esa generación era de 9.300.000 habitantes</li><li>La epoca estuvo marcada por la crisis del 73 y la transicion española</li><li>El rasgo catacteristico de este generacion es la obsecion por el exito</li>"
      );
    } else if (this.#anioNac >= 1981 && this.#anioNac <= 1993) {
      document.write(
        "<lu><li>Pertence a la Generación 'Y'</li><li>Comprende a los nacidos entre 1981 y 1993</li><li>La población en esa generación era de 7.200.000 habitantes</li><li>La epoca estuvo marcada por el inicio de la digitalizacion</li><li>El rasgo catacteristico de este generacion es la frustracion</li>"
      );
    } else if (this.#anioNac >= 1994 && this.#anioNac <= 2010) {
      document.write(
        "<lu><li>Pertence a la Generación 'Z'</li><li>Comprende a los nacidos entre 1994 y 2010</li><li>La población en esa generación era de 7.800.000 habitantes</li><li>La epoca estuvo marcada por la expansion masiva de internet</li><li>El rasgo catacteristico de este generacion es la irreverencia</li>"
      );
    } else
      document.write(
        "<p>La fecha ingresada no pertenece a las generaciones del estudio, por favor ingrese una fecha entre 1930 y 2010</p>"
      );
  }
  mayorEdad() {
    if (this.#edad1 >= 18) {
      document.write("<p>La persona es mayor de edad</p>");
    } else document.write("<p>La persona es menor de edad</p>");
  }
  mostrarDatos() {
    document.write(`<ul>
      <li>Persona</li>
      <li>Nombre: ${this.#nombre}</li>
      <li>Edad: ${this.#edad1}</li>
      <li>DNI: ${this.#dni1}</li>
      <li>Genero: ${this.#sexo}</li>
      <li>Peso: ${this.#peso} Kg</li>
      <li>Altura: ${this.#altura} Cm</li>
      <li>Año de nacimiento: ${this.#anioNac}</li>
      </ul>
      `);
  }
  generaDNI() {
    document.write(parseInt(Math.random() * 99999999));
  }
}
