let frutas = ['manzana','uva','melon']

console.log(frutas.length)

frutas.push('sandia'); //Agrega un nuevo elemento al final del array
frutas.pop() //elimina el ultimo elemento del array
frutas.push('frutilla');
frutas.shift(); //elimina el primer elemento del array
frutas.unshift('manzana');
console.log(frutas)


let iterador = 0
let largo = frutas.length
while (iterador<largo){
    console.log(frutas.shift());
    iterador++
}
console.log(frutas);

let notaas = [70, 45, 35, 55, 65]
let i = 0;
let acumulador = 0
let totalNotas = 0
while (i<notaas.length){
    if(notaas[i]>=40){
        acumulador += notaas[i];
        totalNotas++
    }
 i++
}
let promedio = acumulador / totalNotas;
console.log(`suma ${acumulador}, promedio ${promedio}`);

let notas = [45, 70, 35, 55, 65, 90, 35]
let huboCambios = true;
let contador = 0
while(huboCambios){
    huboCambios = false;
    contador++
    for (let index = 0; index < notas.length; index++) {
        if(notas[index] < notas[index + 1]){
            let temp = notas[index + 1];
            notas[index + 1] = notas[index];
            notas[index] = temp;
            huboCambios = true
        }
    }
}


console.log(notas, 'contador', contador);

