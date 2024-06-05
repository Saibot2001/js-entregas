//Declaracion
let aux = 0;
let menu = 0;
const inventarioTienda = [{id : 1 , producto: "Silla" , precio: 1000} ,
                          {id : 2 , producto: "Sillon", precio: 1500} ,
                          {id : 3 , producto: "Mesa", precio: 2000} ,
                          {id : 4 , producto: "Puerta", precio: 3500} ,
                          {id : 5 , producto: "Banco", precio: 500}] ;
const carrito = [] ;

//Mostrar Articululos
inventarioLista = 0;
articulo = 0;
function mostrarArticulos(){

    for (const articulo of inventarioTienda){
        let inventarioTienda = document.createElement("div");
        inventarioTienda.innerHTML= ` <li>${articulo.producto}  $ ${articulo.precio} </li> `
        document.body.appendChild(inventarioTienda);
    }
    
}




//.........

function agregar(){
    //Cargar
    aux = document.getElementById("carrito").value;
    carrito.push(inventarioTienda[aux-1]);
}


//Vaciar (No funciona)
function vaciar(carrito){
    carrito = [];
    
}

//Imprimir carrito
function print(){
    let total = 0;
    for (const articulo of carrito){
        let contenedorCarrito = document.createElement("div");
        contenedorCarrito.innerHTML= ` <h3>${articulo.producto}  $ ${articulo.precio} </h3> `
        document.body.appendChild(contenedorCarrito);
        total = total + articulo.precio;
    }
    let contenedorTotal = document.createElement("divTotal");
    contenedorTotal.innerHTML= ` <h3>Total : $ ${total}</h3> `;
    document.body.appendChild(contenedorTotal);
}
