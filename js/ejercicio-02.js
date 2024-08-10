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
<<<<<<< HEAD

  ingresar: function (cantidad) {
  
    document.write(`<p>La cantidad ingresada es: ${this.saldo}</p>`);
  },

  extraer: function () {
    saldo = resta(saldo, cantidad);
    document.write(`<p>La cantidad ingresada es: ${this.saldo}</p>`);
  },
=======
  ingreso: 100,
  extraccion: 30,

  ingresar: function () {
    document.write(
      `<p>Su nuevo saldo despues de ingresar dinero es: $${
        this.saldo + this.ingreso
      } `
    );
  },

  extraer: function () {
    document.write(
      `<p>Su nuevo saldo después de extraer dinero es: $ ${
        this.saldo - this.extraccion
      }</p>`
    );
  },

>>>>>>> ejercicio-03
  informar: function () {
    document.write(`<p>Su nuevo saldo es: ${this.saldo}</p>`);
  },
};
//Ahora llamo a los metodos
console.log(cuenta);
<<<<<<< HEAD
document.write(`<p>Cuenta: ${cuenta.ingresar}</p>`);
document.write(`<p>Cuenta: ${cuenta.extraer}</p>`);
=======
document.write(`<h2>Titular de la cuenta: ${cuenta.titular}</h2>`);
document.write(`<p>Su saldo inicial es: $${cuenta.saldo}</p>`)
document.write(`<p>Ud ingresó: ${cuenta.ingreso}</p>`);
let saldoIngreso = cuenta.ingresar();
document.write(`<p>Su saldo inicial es: $${cuenta.saldo}</p>`)
document.write(`<p>Ud extrajo: $${cuenta.extraccion}</p>`);
let saldoExtraccion = cuenta.extraer();
>>>>>>> ejercicio-03
