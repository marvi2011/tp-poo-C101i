/* 2- Modelando objetos
escribe un programa que cree un objeto "cuenta" cib kas siguientes propiedades
titular con el valor Axel
saldo, con valor inicial de cero
metodo ingresar() que permita añadir dinero pasando la cantidad como parametro
metodo extraer() que permita retirar la cantidad pasada como parametro
metodo informar() que retorne la informaciion del estada de la cuenta
Utiliza este objeto para mostar la descripcion, ingresar y extraer dinero y vokver a mostrar la descripcion del estado de cuenta*/
const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (cantidad) {
  
    document.write(`<p>La cantidad ingresada es: ${this.saldo}</p>`);
  },

  extraer: function () {
    saldo = resta(saldo, cantidad);
    document.write(`<p>La cantidad ingresada es: ${this.saldo}</p>`);
  },
  informar: function () {
    document.write(`<p>Su nuevo saldo es: ${this.saldo}</p>`);
  },
};
//Ahora llamo a los metodos
console.log(cuenta);
document.write(`<p>Cuenta: ${cuenta.ingresar}</p>`);
document.write(`<p>Cuenta: ${cuenta.extraer}</p>`);
