/* Ejercicio 2
Escribe una función que tome un array de números como parámetro y devuelva un nuevo array con los números ordenados de forma ascendente. */

function ord_asc(arreglo){
    return arreglo.sort()
}

let mi_array = [5,6,3,2,1,4]

console.log(ord_asc(mi_array));