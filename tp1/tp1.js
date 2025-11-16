js
// TP1 – Ejercicios de string y arrays
// Alumna: Ana Espíndola
// IFTS – Front End

// 1) Calcular el área de un rectángulo
// La función debe retornar el área (largo x ancho)
function calcularAreaRectangulo(largo, ancho) {
    return largo * ancho;
}
console.log(calcularAreaRectangulo(5, 3));


// 2) Contar palabras en una cadena
// Se separa por espacios y se cuentan las palabras
function contarPalabras(texto) {
    const palabras = texto.trim().split(" ");
    return palabras.length;
}
console.log(contarPalabras("Humahuaca es un lugar copado"));


// 3) Contar vocales en una cadena
function contarVocales(cadena) {
    const vocales = "aeiouAEIOU";
    let contador = 0;

    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}
console.log(contarVocales("JavaScript"));


// 4) Saber si un texto es palíndromo
function esPalindromo(texto) {
    const limpio = texto.toLowerCase();
    const invertido = limpio.split("").reverse().join("");
    return limpio === invertido;
}
console.log(esPalindromo("neuquen"));


// 5) Convertir edad de perro a años humanos
// Muestra el mensaje por consola (no retorna valor)
function edadCanina(edadHumana) {
    const edadPerro = edadHumana * 7;
    console.log("Tu perro tiene " + edadPerro + " años humanos");
}
edadCanina(7);


// 6) Capitalizar la primera letra de cada palabra
function capitalizarPalabras(frase) {
    const palabras = frase.split(" ");

    const resultado = palabras.map(p => {
        return p.charAt(0).toUpperCase() + p.slice(1);
    });

    return resultado.join(" ");
}
console.log(capitalizarPalabras("hola mundo desde javascript"));


// 7) Generar los primeros N números de Fibonacci
function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];

    const serie = [0, 1];

    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return serie;
}
console.log(fibonacci(5));


// -----------------------------------------------------------
// 8) LISTA DE PRODUCTOS
// -----------------------------------------------------------

const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 15, categoria: "electrónica" },
    { id: 2, nombre: "Mouse", precio: 25, stock: 50, categoria: "electrónica" },
    { id: 3, nombre: "Teclado", precio: 45, stock: 30, categoria: "electrónica" },
    { id: 4, nombre: "Monitor", precio: 300, stock: 20, categoria: "electrónica" },
    { id: 5, nombre: "Libro", precio: 15, stock: 100, categoria: "libros" }
];

// 8.1 forEach → mostrar nombre y precio
productos.forEach(prod => {
    console.log(prod.nombre + " - $" + prod.precio);
});

// 8.2 map → array con nombres
const nombres = productos.map(p => p.nombre);
console.log(nombres);

// 8.3 filter → electrónicos con stock > 20
const electronicosConStock = productos.filter(p => p.categoria === "electrónica" && p.stock > 20);
console.log(electronicosConStock);

// 8.4 find → producto con id 3
const productoId3 = productos.find(p => p.id === 3);
console.log(productoId3);

// 8.5 reduce → valor total del inventario
const valorTotal = productos.reduce((acum, p) => acum + (p.precio * p.stock), 0);
console.log(valorTotal);


// -----------------------------------------------------------
// 9) ESTUDIANTES Y CALIFICACIONES
// -----------------------------------------------------------

const estudiantes = [
    { id: 1, nombre: "Ana", edad: 20, calificaciones: [8, 9, 7, 8] },
    { id: 2, nombre: "Carlos", edad: 22, calificaciones: [6, 7, 8, 7] },
    { id: 3, nombre: "María", edad: 21, calificaciones: [9, 9, 8, 10] },
    { id: 4, nombre: "Juan", edad: 19, calificaciones: [7, 6, 5, 8] }
];

// 9.1 forEach → nombre y edad
estudiantes.forEach(e => {
    console.log(e.nombre + " - " + e.edad + " años");
});

// 9.2 map → nombre + promedio
const promedios = estudiantes.map(e => {
    const suma = e.calificaciones.reduce((a, b) => a + b, 0);
    const promedio = suma / e.calificaciones.length;

    return { nombre: e.nombre, promedio: promedio };
});
console.log(promedios);

// 9.3 filter → promedio > 7.5
const destacados = promedios.filter(e => e.promedio > 7.5);
console.log(destacados);

// 9.4 find → estudiante llamado María
const maria = estudiantes.find(e => e.nombre === "María");
console.log(maria);

// 9.5 reduce → edad promedio
const edadPromedio = estudiantes.reduce((acum, e, i, arr) => {
    return acum + (e.edad / arr.length);
}, 0);
console.log(edadPromedio);


// -----------------------------------------------------------
// 10) PELÍCULAS
// -----------------------------------------------------------

const peliculas = [
    { id: 1, titulo: "El Padrino", año: 1972, duracion: 175, genero: "drama", rating: 9.2 },
    { id: 2, titulo: "Pulp Fiction", año: 1994, duracion: 154, genero: "crimen", rating: 8.9 },
    { id: 3, titulo: "El Señor de los Anillos", año: 2001, duracion: 178, genero: "fantasía", rating: 8.8 },
    { id: 4, titulo: "Interestelar", año: 2014, duracion: 169, genero: "ciencia ficción", rating: 8.6 },
    { id: 5, titulo: "Parásitos", año: 2019, duracion: 132, genero: "drama", rating: 8.6 }
];

// 10.1 forEach → título y año
peliculas.forEach(p => {
    console.log(p.titulo + " (" + p.año + ")");
});

// 10.2 map → títulos en mayúsculas
const titulosMayus = peliculas.map(p => p.titulo.toUpperCase());
console.log(titulosMayus);

// 10.3 filter → dramas con rating > 8.5
const dramas = peliculas.filter(p => p.genero === "drama" && p.rating > 8.5);
console.log(dramas);

// 10.4 find → película del año 2014
const peli2014 = peliculas.find(p => p.año === 2014);
console.log(peli2014);

// 10.5 reduce → duración total
const duracionTotal = peliculas.reduce((acum, p) => acum + p.duracion, 0);
console.log(duracionTotal);
