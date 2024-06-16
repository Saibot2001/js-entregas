
// Declaración
let aux = 0;
let menu = 0;
const inventarioTienda = [
    {id: 1, producto: "Silla", precio: 1000},
    {id: 2, producto: "Sillon", precio: 1500},
    {id: 3, producto: "Mesa", precio: 2000},
    {id: 4, producto: "Puerta", precio: 3500},
    {id: 5, producto: "Banco", precio: 500}
];
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar Artículos
function mostrarArticulos() {
    for (const articulo of inventarioTienda) {
        let inventarioItem = document.createElement("div");
        inventarioItem.innerHTML = `<li>${articulo.producto}  $ ${articulo.precio}</li>`;
        document.body.appendChild(inventarioItem);
    }
}

// Silla
let botonSilla = document.getElementById("btnSilla");
botonSilla.addEventListener("click", () => agregarArticulo(0));

// Sillón
let botonSillon = document.getElementById("btnSillon");
botonSillon.addEventListener("click", () => agregarArticulo(1));

// Mesa
let botonMesa = document.getElementById("btnMesa");
botonMesa.addEventListener("click", () => agregarArticulo(2));

// Puerta
let botonPuerta = document.getElementById("btnPuerta");
botonPuerta.addEventListener("click", () => agregarArticulo(3));

// Banco
let botonBanco = document.getElementById("btnBanco");
botonBanco.addEventListener("click", () => agregarArticulo(4));

// Función para agregar artículo al carrito
function agregarArticulo(index) {
    carrito.push(inventarioTienda[index]);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Vaciar
const clearButton = document.getElementById('btnVaciar');
clearButton.addEventListener('click', () => {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    while (carritoSpace.firstChild) {
        carritoSpace.removeChild(carritoSpace.firstChild);
    }
    while (totalSpace.firstChild) {
        totalSpace.removeChild(totalSpace.firstChild);
    }
});

// Imprimir carrito
let botonImprimir = document.getElementById("btnVerCarrito");
botonImprimir.addEventListener("click", print);

function print() {
    let total = 0;
    // Limpiar espacio de carrito antes de agregar elementos
    carritoSpace.innerHTML = ''; 
    for (const articulo of carrito) {
        const h3 = document.createElement('h3');
        h3.textContent = `${articulo.producto}  $ ${articulo.precio}`;
        carritoSpace.appendChild(h3);
        total += articulo.precio;
    }
    
    // Limpiar espacio de total antes de agregar nuevo total
    totalSpace.innerHTML = ''; 
    const totalH3 = document.createElement('h3');
    totalH3.textContent = `Total: $ ${total}`;
    totalSpace.appendChild(totalH3);
}


