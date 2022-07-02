/*
Ejemplos de
tipos de datos
en JavaScript
*/

//Tipo de dato String
var nombre = "Manuel";
console.log(nombre);
console.log(typeof nombre);

nombre = 10;
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objecto = {
  nombre: "Manuel",
  apellido: "Requena",
  edad: 27,
  telefono: 2657234696,
};
console.log(objecto);
console.log(typeof objecto);

//Tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato funtion
function miFuncion() {}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined
var x;
console.log(x);

x = undefined;
console.log(x);
console.log(typeof x);

//Tipo de dato null
var y = null;
console.log(y);
console.log(typeof y);

//Array se considera object
var autos = ["Audio", "BMW", "Volvo"];
console.log(autos);
console.log(typeof autos);
