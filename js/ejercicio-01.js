/*1- Crear objetos
Crea un objeto llamado auto que tenga algunas caracteristicas como el color, marca, modelo y si esta encendido o opagado.
Crea los metodos necesarios para permitir encender y apagar el auto */
//primero creo el objeto con notación literal
const auto = {
  color: "Rojo",
  marca: "VW",
  modelo: "Gol Trend",
  estadoOn: "Encendido",
  estadoOff: "Apagado",

  //creo los metodos de encendido y apagado con funcion declarativa
  encenderAuto: function () {
    document.write(`<p>El auto ahora está: ${this.estadoOn}</p>`);
  },
 
  detenerAuto: function () {
    document.write(`<p>El auto ahora está: ${this.estadoOff}</p> `);
  },
};
//ahora veo en la consola los datos y muestro en pantalla
console.log(auto);
document.write("<h2>El auto presenta las siguientes características</h2>");
document.write(`<p>Marca: ${auto.marca}</p>`);
document.write(`<p>Modelo: ${auto.modelo}</p>`);
document.write(`<p>Color: ${auto.color}</p>`);

auto.encenderAuto()
auto.detenerAuto()