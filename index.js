//Declaracion
let aux = 0;
let menu = 0;
const inventarioTienda = [{id : 1 , producto: "Silla" , precio: 1000} ,
                          {id : 2 , producto: "Sillon", precio: 1500} ,
                          {id : 3 , producto: "Mesa", precio: 2000} ,
                          {id : 4 , producto: "Puerta", precio: 3500} ,
                          {id : 5 , producto: "Banco", precio: 500}] ;
const carrito = [] ;

function menuCarrito(){

    while (menu !="D"){
        menu=prompt("A-Generar Carrito\nB-Mostrar Carrito\nC-Borrar Carrito\nD-Salir");
        switch(menu){
                            //Carga Carrito
                            case "A":
                                while(aux != "9"){
                                    aux = prompt("1-Sillon\n2-Silla\n3-Mesa\n9-Salir");
                                    carrito.push(inventarioTienda[aux - 1]);
                                                
                                            }
                            break;
                            //Imprimir Carrito
                            case "B":
                                for ( let i = 0 ; i < carrito.length - 1; i++){
                                    alert(carrito[i]);
                                }
                                break;
                                //Limpiar Carrito
                                case "C":
                                    carrito = [];
                                    alert("Carrito eliminado");
                                    break;
                                }
                            }
}


function agregar(){
    //Cargar
    console.log("hola")
    aux = document.getElementById("carrito").value;
    carrito.push(inventarioTienda[aux-1])
     
}


//Vaciar
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