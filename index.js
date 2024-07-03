// Array de productos con nombres, precios e imágenes
const productos = [
    { nombre: 'Groot', precio: 15000, imagen: './images/tienda/groot.jpg' },
    { nombre: 'Lapicero', precio: 10000, imagen: './images/tienda/lapicero.jpg' },
    { nombre: 'Mate', precio: 17000, imagen: './images/tienda/mate.jpg' },
    { nombre: 'Lapiceros', precio: 12000, imagen: './images/tienda/lapicero2.jpg' },
    { nombre: 'Maceta', precio: 35000, imagen: './images/tienda/maceta.jpg' },
    { nombre: 'Set Bob Esponja', precio: 40500, imagen: './images/tienda/set.jpg' }
];

// Item adicional a agregar
const nuevoProducto = { nombre: 'Lapicero', precio: 10000, imagen: './images/tienda/lapicero.jpg' };

// Verificar si el producto ya existe en el arreglo
const existeProducto = productos.some(producto => producto.nombre === nuevoProducto.nombre);

// Si no existe, agregarlo al arreglo
if (!existeProducto) {
    productos.push(nuevoProducto);
}

// Obtener elementos del DOM
const contenedorProductos = document.getElementById('contenedor-productos');
const btnVerCarrito = document.getElementById('btnVerCarrito');
const btnCerrarCarrito = document.getElementById('btnCerrarCarrito');
const carritoItems = document.getElementById('carritoItems');
const listaCarrito = document.getElementById('listaCarrito');
const totalCarrito = document.getElementById('totalCarrito');
const btnVaciar = document.getElementById('btnVaciar');
const contadorItems = document.getElementById('contador-items');

let carrito = [];

// Función para generar dinámicamente los elementos de productos
function generarElementos() {
    productos.forEach((producto) => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const h2 = document.createElement('h2');
        h2.textContent = `${producto.nombre} $${producto.precio}`;

        const button = document.createElement('button');
        button.textContent = 'Agregar al Carrito';
        button.addEventListener('click', () => agregarAlCarrito(producto));

        divProducto.appendChild(img);
        divProducto.appendChild(h2);
        divProducto.appendChild(button);
        contenedorProductos.appendChild(divProducto);
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    const productoEnCarrito = carrito.find(item => item.nombre === producto.nombre);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    carrito.forEach((producto) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} x ${producto.cantidad} - $${producto.precio * producto.cantidad}`;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => eliminarDelCarrito(producto));

        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
        total += producto.precio * producto.cantidad;
        totalItems += producto.cantidad;
    });

    totalCarrito.textContent = `Total: $${total}`;
    contadorItems.textContent = totalItems;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
    carrito = carrito.filter(item => item.nombre !== producto.nombre);
    actualizarCarrito();
}

// Mostrar y ocultar el carrito
btnVerCarrito.addEventListener('click', () => {
    carritoItems.style.display = 'block';
});

btnCerrarCarrito.addEventListener('click', () => {
    carritoItems.style.display = 'none';
});

// Función para vaciar el carrito
btnVaciar.addEventListener('click', () => {
    carrito = [];
    actualizarCarrito();
});

// Función para finalizar la compra
function finalizarCompra() {
    // Calcular el total de la compra
    let totalCompra = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

    // Mostrar mensaje de agradecimiento con SweetAlert
    Swal.fire({
        icon: 'success',
        title: '¡Gracias por su compra!',
        text: `El total de su compra es: $${totalCompra}`,
        confirmButtonText: 'Cerrar'
    });

    // Vaciar el carrito después de finalizar la compra (opcional)
    carrito = [];
    actualizarCarrito();
}

// Botón "Finalizar Compra" en el carrito
const btnFinalizarCompra = document.createElement('button');
btnFinalizarCompra.textContent = 'Finalizar Compra';
btnFinalizarCompra.addEventListener('click', finalizarCompra);
carritoItems.appendChild(btnFinalizarCompra);

// Llamar a la función para generar los elementos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    generarElementos();
});
