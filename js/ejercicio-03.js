//3- Escribe una clase que permita crear distintos objetos "rectangulos" ¿, con las siguientes propiedades de alto  ancho, mas los metodos necesarios para modificar y mostrar sus propiedades, calcular el perimetro y el area
//creo la clase para crear luego los objetos
class Rectangulo {
  #alto;
  #ancho;
  constructor(alto, ancho) {
    this.#alto = alto;
    this.#ancho = ancho;
  }
  //ahora creo los getter y setter
  get alto() {
    return this.#alto;
  }
  get ancho() {
    return this.#ancho;
  }
  set alto(nuevaAltura) {
    this.#alto = nuevaAltura;
  }
  set ancho(NuevoAncho) {
    this.#ancho = NuevoAncho;
  }
  //ahora hago los metodos
  informar() {
    document.write(
      `<p>El alto del rectangulo es de: ${this.#alto} cm, el ancho es de: ${
        this.#ancho
      } cm.</p>`
    );
  }
  area() {
    document.write(
      `<p>El área del rectángulo es: ${this.#alto * this.#ancho} cm.`
    );
  }
  perimetro() {
    document.write(
      `<p>El perimetro del rectangulo es: ${
        (this.#alto + this.#ancho) * 2
      } cm.</p>`
    );
  }
}
//declarar los objetos
let rectangulo1 = new Rectangulo(4, 6);
let rectangulo2 = new Rectangulo(2, 8);
let rectangulo3 = new Rectangulo(5, 9);

//veo los objetos por consola
console.log(rectangulo1);
console.log(rectangulo2);
console.log(rectangulo3);

//muestro los resultados por pantalla

document.write("<h2>Rectángulo N° 1: </h2>");
rectangulo1.informar();
rectangulo1.area();
rectangulo1.perimetro();
//ahora vamos a modificar los datos
document.write("<h3>Ahora vamos a moficar los datos<h3>");
rectangulo1.alto = 5;
rectangulo1.ancho = 7;
//document.write(`${rectangulo1.area}`)
rectangulo1.informar();
rectangulo1.area();
rectangulo1.perimetro();

document.write("<h2>Rectángulo N° 2: </h2>");
rectangulo2.informar();
rectangulo2.area();
rectangulo2.perimetro();

document.write("<h2>Rectángulo N° 3: </h2>");
rectangulo3.informar();
rectangulo3.area();
rectangulo3.perimetro();
