
//Declaracion
let aux = 0;
const inventarioTienda = ["Sillon" , "Silla" , "Mesa"] ;
let carrito = [] ;


//Carga Carrito
while(aux != "9"){
    
    aux = prompt("1-Sillon\n2-Silla\n3-Mesa\n9-Salir");
    carrito.push(inventarioTienda[aux - 1]);

}

//Imprimir Carrito

for ( let i = 0 ; i <= carrito.length; i++){
    
    console.log(carrito[i])

}


//Limpiar Carrito
carrito = [];
alert(carrito.length);
alert("Hola");