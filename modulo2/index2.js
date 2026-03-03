//WHILE
//mientras (condicion) -> hacer ....

//Tabla del 5: Crea una variable i que empiece en 1. Imprime el resultado de 5 * i mientras i sea menor o igual a 10. No olvides sumar 1 a i en cada vuelta.

let i = 0;


while (i < 10) {
    console.log(5 + " x " + (i + 1) + " = " + (5 * (i + 1)))
    i += 1
}

//Suma de Números: Crea una variable suma (empieza en 0) y una variable numero (empieza en 1). Escribe un bucle que sume el numero actual a suma mientras el numero sea menor o igual a 50. Al final, imprime el total de la suma.

let suma = 0;
let num = 1;

while (suma < 50) {
    console.log(suma)
    suma += num

}

//Pares Solamente: Crea un bucle que recorra los números del 1 al 20, pero que solo imprima el número si este es par (puedes usar el operador módulo % 2 === 0).


let p = 0;

while (p < 20) {
    p += 1;
    if (p % 2 === 0) {
        console.log(p)
    }
}

let n = 10
let cant = 5
let list = []
let sum = 0;

while (sum < n) {
    for (i = 1; i < cant; i++) {
        list.push(i)
        sum = sum + list[i - 1]
        console.log("suma: " + sum)

    }
}
console.log(list)


let m = 6
const lista = [3, 14, 21, 8, 7, 28]
let bool = true;
let y = 0;
while (bool) {
    let lis = lista[y]
    if ((lis % 7 == 0) && (lis > 10)) {
        console.log(lis)
        bool = false


    }
    y++;
}

let tableCondition = true;

while (tableCondition) {

    let op = prompt("Que quiere hacer. 1-Hacer la tabla, 2-Salir")

    switch (op) {
        case "1":
            let numberTable = parseInt(prompt("Que tabla quiere hacer: "))
            for (let index = 1; index < 11; index++) {
                console.log(numberTable + " x " + index + " = " + (numberTable * index))
            }
            break;
        case "2":
            console.log("saliendo...")
            tableCondition = false;
            break;
        default:
            console.log("opcion invalida")

    }

}


let limitSum = 10;
let numberCant = 5;
let listNumber = [1, 2, 3, 4, 5]
let u = 0;
let con = true;
let sumNumber = 0;

while (con) {
    let number = listNumber[u];
    sumNumber += number;
    if (sumNumber >= limitSum) {
        con = false;
        console.log(sumNumber)
        break;

    }
    u++;

}

let cantNumberList = 6
let newList = [3, 14, 21, 8, 7, 28]
let t = true;
let o = 0;

while (t) {
    let numberr = newList[o];
    if ((numberr % 7 == 0) && (numberr > 10)) {
        console.log(numberr)
        t = false
        break;
    }
    o++;
}

/*
Descripción del problema
Se te proporciona una lista de números enteros. Debes realizar dos tareas:
Encontrar el primer número positivo mayor que un valor dado X. Para optimizar, debes terminar la búsqueda tan pronto como encuentres ese número (usa break).
Calcular la suma de todos los números que no sean cero. Para esto, debes saltar los ceros y no sumarlos (usa continue).
Formato de entrada
La primera línea contiene un entero N (cantidad de números).
La segunda línea contiene N números enteros separados por espacios.
La tercera línea contiene el entero X para la búsqueda.
Formato de salida
En la primera línea, imprime el primer número positivo mayor que X. Si no existe, imprime -1.
En la segunda línea, imprime la suma de todos los números distintos de cero.
Ejemplo

Entrada:
6
0 3 -1 5 0 7
4

Salida:
5
15
*/

let cantNumbers = 6;
let listNumbers = [0, 3, -1, 5, 0, 7]
let searchNumber = 4;
let paulo = true;
let sumNumbers = 0;
let k = 0;

while (paulo) {

    for (i = 1; i < listNumbers.length; i++) {
        if (listNumbers[i] == 0) {
            continue;
        } else {
            sumNumbers += listNumbers[i];

        }
    }

    for (i = 0; i < listNumbers.length; i++) {
        if (listNumbers[i] > searchNumber) {
            paulo = false;
            console.log("el numero mayor a 4 es: " + listNumbers[i])
            break;
        }
    }


}
console.log(sumNumbers)


/*
Mini-reto integrador: Procesar lista de números con control de flujo
En este reto, recibirás una lista de números enteros y deberás procesarla para obtener una suma específica siguiendo estas reglas:
Solo sumarás números positivos mayores que 10.
Si encuentras un número negativo, debes detener el procesamiento inmediatamente (usar break).
Si el número es positivo pero menor o igual a 10, debes ignorarlo y continuar con el siguiente (usar continue).
Usa un ciclo while para recorrer la lista y operadores lógicos para evaluar las condiciones.
Formato de entrada
La primera línea contiene un número entero N que indica la cantidad de números en la lista.
La segunda línea contiene N números enteros separados por espacios.
Formato de salida
Un solo número entero que es la suma calculada según las reglas.
Ejemplo
Entrada:


6
12 5 20 -3 15 30
Salida:


32
Explicación:
12 > 10 y positivo → sumar (suma=12)
5 ≤ 10 → ignorar
20 > 10 y positivo → sumar (suma=32)
-3 negativo → detener el ciclo
Los números 15 y 30 no se procesan porque el ciclo se detuvo.

*/

let coso = 6;
let listaCoso = [12, 5, 20, -3, 15, 30]
let sumCoso = 0;
let leal = true
while (leal) {
    for (i = 0; i < listaCoso.length; i++) {
        if (listaCoso[i] > 10) {
            sumCoso += listaCoso[i]
        }
        if (listaCoso[i] < 0) {
            leal = false;
            break;
        }
        if (listaCoso[i] < 10) {
            continue;
        }
    }

}
console.log(sumCoso);

