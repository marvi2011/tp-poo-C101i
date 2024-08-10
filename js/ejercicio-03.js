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
    return `El alto del rectangulo es de: ${this.alto} cm, el ancho es de: ${this.ancho} cm.</p>`;
  }
  area() {
    document.write(`<p>El área del rectángulo es: ${this.#alto * this.#ancho} cm.`);
  }
  perimetro() {
    document.write(
      `<p>El perimetro del rectangulo es: ${(this.#alto + this.#ancho) * 2} cm.</p>`
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
document.write(`<p>Alto: ${rectangulo1.alto}</p>`);
document.write(`<p>Ancho: ${rectangulo1.ancho}</p>`);
rectangulo1.area();
rectangulo1.perimetro();

document.write("<h2>Rectángulo N° 2: </h2>");
document.write(`<p>Alto: ${rectangulo2.alto}</p>`);
document.write(`<p>Ancho: ${rectangulo2.ancho}</p>`);
rectangulo2.area();
rectangulo2.perimetro();

document.write("<h2>Rectángulo N° 3: </h2>");
document.write(`<p>Alto: ${rectangulo3.alto}</p>`);
document.write(`<p>Ancho: ${rectangulo3.ancho}</p>`);
rectangulo3.area();
rectangulo3.perimetro();
