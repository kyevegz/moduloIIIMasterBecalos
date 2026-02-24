// //while

// //imprimir 5 veces mi nombre

// let i = 0;

// if(i < 5){
//     console.log("Jimena");
//     i++;
// }

// if(i < 5){
//     console.log("Jimena");
//     i++;
// }

// if(i < 5){
//     console.log("Jimena");
//     i++;
// }

// if(i < 5){
//     console.log("Jimena");
//     i++;
// }

// if(i < 5){
//     console.log("Jimena");
//     i++;
// }

// //ciclo

// let j = 0;

// while(j < 5){
//     console.log('jimena');
//     j++;
// }
// let k = 1;
// while(true){
//     if(k == 7){
//         break
//     }
//     console.log(k);

//     k++;
// }

// //negando la condición

// while( k != 7){
//     k++;
// }

//for

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

//arreglos

let nombres = ["Jimena", "Marco", "Juan", "Alonso"];

let chocomilk = ["uno", 3, true, 7.4552];

console.log(chocomilk[2]);

console.log(nombres[3]);


//metodos de arreglos

//push - agregar un elemento al final
nombres.push("Maryjose");
console.log(nombres);

//pop - quitar el último elemento
nombres.pop();
console.log(nombres);

//unshif - agregar un elemento al inicio
nombres.unshift("Isaías");
console.log(nombres);

//shift - quitar el primer elemento

nombres.shift();
console.log(nombres);

//sort - ordenar un array
nombres.sort(); //sort ordena por orden alfabético por defecto
console.log(nombres);

//si se pide un número fuera del rango, da undefined
console.log(nombres[4])
//

for(let k = 0; k < nombres.length; k++){
    console.log(nombres[k]);
}