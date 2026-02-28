//LET: variables que van cambiando su valor
//const: variables que no cambian, son constantes
//parseInt: pasamos a entero un String
//parseFloat: ====  = decimal = =====

//string: texto
//int/float: numros
//boolean: true/false

const num1 = 6;
const num2 = 8;
let result = 0;
result = num1 + num2
console.log(num1 + ' + ' + num2 + " es igual a: " + result)

//prompt: ingresar datos por pantalla:

let num3 = parseInt(prompt("ingrese un numero: "))
let num4 = parseInt(prompt("ingrese otro numero: "))

//If,if else, else: condicionales

let opcion = parseInt(prompt("que quiere hacer: 1-> sumar , 2->restar, 3->salir"))

if (opcion == 1) {
    result = num3 + num4;
    console.log("la suma es: " + result)
} else if (opcion == 2) {
    result = num3 - num4;
    console.log("la resta es: " + result)

} else {
    console.log("saliendo del programa...")
}



//SWITCH CASE: se utiliza para mas opciones y es mas legible y funcional.
alert("Ahora el switch case")
let num5 = parseInt(prompt("ingrese un numero: "))
let num6 = parseInt(prompt("ingrese un numero: "))

let op = parseInt(prompt("que quiere hacer: 1-> sumar , 2->restar, 3->dividir, 4->multiplicar, 5-> salir"))

switch (op) {
    case (op = 1):
        result = num5 + num6
        console.log("la suma es: ", result)
        break; //break para que no siga el programa
    case (op = 2):
        result = num5 - num6
        console.log("la resta es: " + result)
        break; //break para que no siga el programa
    case (op = 3):
        result = num5 / num6
        console.log("la division es: " + result)
        break; //break para que no siga el programa
    case (op = 4):
        result = num5 * num6
        console.log("la multiplicacion es: " + result)
        break; //break para que no siga el programa
    case (op = 5):
        console.log("saliendo...") //break para que no siga el programa
        break;
    default:
        console.log("mal")


}

//COMANDOS GIT,GITHUB: crear repositorio en github. 

//git initi: iniciar repo
//git add: agregar cambios
//git commit: comentar cambios
//git remote add origin (repo)
//git branch -M main ->Cambiamos la rama principal a main por etica 
//git push -u origin main ->Pusheamos los cambios
 