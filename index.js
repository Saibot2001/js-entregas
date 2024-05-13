
//Declaracion
let aux = 0;
let menu = 0;
const inventarioTienda = ["Sillon" , "Silla" , "Mesa"] ;
let carrito = [] ;

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

menuCarrito();