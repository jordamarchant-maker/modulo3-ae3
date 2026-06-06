// 🍎 Ejercicio 1 — Inventario de frutas
const frutas = ['uva', 'manzana', 'pera', 'durazno', 'sandia'];

console.log("=== EJERCICIO 1 ===");
console.log("Primera fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);
console.log("Total de frutas:", frutas.length);

frutas.unshift('kiwi');
frutas.pop();

console.log("--- Después de modificar ---");
console.log("Primera fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);
console.log("Total de frutas:", frutas.length);


// 🎮 Ejercicio 2 — Sistema de cuentas activas
const cuentas = [true, true, false, true, true, false, false, true];

console.log("=== EJERCICIO 2 ===");
console.log("Total de cuentas:", cuentas.length);
console.log("Cuentas activas:", cuentas.filter(c => c === true).length);
console.log("Cuentas inactivas:", cuentas.filter(c => c === false).length);


// 🎬 Ejercicio 3 — Maratón de Series
const duracion = [65, 55, 70, 45, 50, 80, 127];

console.log("=== EJERCICIO 3 ===");
const totalDuracion = duracion.reduce((acc, val) => acc + val, 0);
console.log("Duración total:", totalDuracion, "minutos");
console.log("Cantidad de capítulos:", duracion.length);
console.log("Promedio de duración:", (totalDuracion / duracion.length).toFixed(2), "minutos");


// 🏫 Ejercicio 4 — Lista de aprobados
const puntaje = [66, 39, 70, 45, 20, 80, 30, 100];

console.log("=== EJERCICIO 4 ===");
const aprobados = puntaje.filter(p => p >= 60);
const reprobados = puntaje.filter(p => p < 60);
const promedioPuntaje = puntaje.reduce((acc, val) => acc + val, 0) / puntaje.length;
console.log("Aprobados:", aprobados.length);
console.log("Reprobados:", reprobados.length);
console.log("Puntaje promedio:", promedioPuntaje.toFixed(2));


// 🧃 Ejercicio 5 — Productos en oferta
const precios = [3000, 30000, 50000, 5000, 2000, 4990, 3990, 29990];

console.log("=== EJERCICIO 5 ===");
const oferta = precios.filter(p => p <= 5000);
console.log("Productos de 5000 o menos:", oferta);


// 🎲 Ejercicio 6 — Lanzamientos de dado
const lanzamientos = [2, 1, 5, 5, 5, 6, 4, 6, 3];

console.log("=== EJERCICIO 6 ===");
const sorted = [...lanzamientos].sort((a, b) => a - b);
const mid = Math.floor(sorted.length / 2);
const mediana = (sorted.length % 2 !== 0) ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
const media = (lanzamientos.reduce((acc, val) => acc + val, 0) / lanzamientos.length).toFixed(2);

const frecuencia = {};
lanzamientos.forEach(n => frecuencia[n] = (frecuencia[n] || 0) + 1);
const maxFreq = Math.max(...Object.values(frecuencia));
const modos = Object.keys(frecuencia).filter(k => frecuencia[k] === maxFreq).map(Number);

console.log("Lanzamientos:", lanzamientos);
console.log("Ordenados:", sorted);
console.log("Media:", media);
console.log("Mediana:", mediana);
console.log("Moda:", modos.join(', '), `(frecuencia: ${maxFreq})`);


