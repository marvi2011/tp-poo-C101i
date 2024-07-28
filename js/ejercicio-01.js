/*1- Crear objetos
Crea un objeto llamado auto que tenga algunas caracteristicas como el color, marca, modelo y si esta encendido o opagado.
Crea los metodos necesarios para permitir encender y apagar el auto */
const auto = {
  color: "Rojo",
  marca: "VW",
  modelo: "Gol Trend",
  estadoOn: "Encendido",
  estadoOff: "Apagado",

  estado1: function () {
    document.write(`<p>El automovil está ${this.estadoOn}</p>`);
  },

  estado2: function () {
    document.write(`<p>El automovil está ${this.estadoOff}</p>`);
  },
};
document.write(`<p>Auto: ${auto.estadoOn}</p>`); //llamo a la funcion en pantalla
document.write(`<p>Auto: ${auto.estadoOff}</p>`); //llamo a la funcion en pantalla
console.log(auto) //veo el objeto en consola