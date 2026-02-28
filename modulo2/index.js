//2. Operadores lógicos y de comparación

//El Mayorista: Crea dos variables con números distintos. Muestra en consola si el primer número es mayor o igual al segundo.

const n1 = 3;
const n2 = 4;


if (n1 === n2) {
  console.log("los numeros son iguales")
} else if (n1 > n2) {
  console.log("el numero" + n1 + "es mas grande que: " + n2)
} else {
  console.log("el numero " + n2 + " es mas grande que el " + n1)
}

//Crea una variable con el número 7 y otra con el texto "7". Realiza una comparación que devuelva false porque, aunque el valor es igual, el tipo de dato es diferente.

const num = 7
const text = "7"

if (num === text) {
  console.log("es igual")
} else {
  console.log("no es igual")
}

//Acceso al Sistema: Tienes tres variables: usuarioRegistrado (boolean), passwordCorrecto (boolean) y esAdmin (boolean). Muestra true solo si el usuario está registrado Y el password es correcto.

let password = false;
let userRegistred = false;
let esAdmin = false;
let user;
let contra;
let admin = prompt("ingrese nombre....")

if (admin == "paulo") {
  console.log("Bienvenido paulo...Un usuario va a ingresar")

  esAdmin = true;
  user = prompt("ingrese nombre de usuario...")
  if (user) {
    console.log("bienvenido! " + user);
    contra = prompt("ingrese contraseña...")
    if (contra == "candymania") {
      console.log("Bienvenido al sistema")
    } else {
      console.log("conntraseña incorrecta")
    }
  } else {
    console.log("Por favor indique nombre.")
  }
} else {
  console.log("alerta de hackeo")
}


//Rango de Edad: Crea una variable edad. Escribe una expresión que devuelva true si la edad está entre 18 y 65 años (inclusive).

const edad = 10;
let mayor = false
if (edad >= 18 && edad <= 65) {
  mayor = true;
  console.log(mayor)
} else {
  console.log(mayor)
}

//Día de Descanso: Crea una variable diaSemana. Escribe una lógica que devuelva true si el día es "Sábado" O "Domingo".

const dia = "pepe"
let si = false;
if (dia == "sabado" || dia == "domingo") {
  si = true;
  console.log(si)
} else {
  console.log(si)
}

//Sensor de Movimiento: Tienes una variable sistemaActivado (true) y otra movimientoDetectado (false). Muestra true si el sistema está activado PERO NO se detectó movimiento (usa el operador !).

let sistemaActivado = true;
let movimientoDetectado = false;

if (sistemaActivado) {
  if (!movimientoDetectado) {
    console.log(sistemaActivado)
  }
}

//Aprobación de Examen: Un estudiante aprueba si:
//Su nota es mayor o igual a 70.
//O si su nota es mayor a 50 Y entregó un trabajoExtra(true).
//Enunciado: Crea las variables y formula la expresión lógica completa.

const nota = 50;
const trabajoExtra = false;

if (nota >= 70) {
  console.log("aprobo sobrado")
} else if (nota === 50 && trabajoExtra) {
  console.log("aprobo de pedo")
} else {
  console.log("no aprobo")
}

/*
Inventario de Héroe: Un personaje puede abrir una puerta secreta si:
Tiene la llaveDorada (true).
O si tiene un nivel de fuerza superior a 90 Y posee una pocionEnergia (true).
PERO, no puede abrirla de ninguna forma si tiene el estado maldicion (true).
Enunciado: Intenta escribir esta lógica en una sola línea de código dentro de un console.log.
*/ 

const llaveDorada=true;
const fuerza= 100;
const pocion=true;
const maldicion=true;

console.log( ( (llaveDorada) ||  ((fuerza>90) && (pocion))  )  && (!maldicion)  )  //false, si puede abrir la puerta


