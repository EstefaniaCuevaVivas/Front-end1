let falda = {tipo:"Falda vaquera",precio: 15}
let vestidoBlanco = {tipo:"Vestido blanco",precio: 20}
let conjuntoCamisa= {tipo:"Conjunto camisa pantalon",precio: 40}
let vestidoEstampado ={tipo:"Vestido estampado",precio: 25}
let monoBlanco ={tipo:"Mono blanco",precio: 30}
let conjuntoJersey ={tipo:"Conjunto jersey y pantalon",precio: 45}
let pantalonBlanco ={tipo:"Pantalon blanco",precio: 35}

let carrito =[]

jQuery(() =>{
  $("#1").on("click",()=>{
    carrito.push(falda);

  });
  $("#2").on("click",()=>{
    carrito.push(vestidoBlanco);
  });

  $("#3").on("click",()=>{
    carrito.push(conjuntoCamisa);
  });
  
  $("#4").on("click",()=>{
    carrito.push(vestidoEstampado);
  });

  $("#5").on("click",()=>{
    carrito.push(monoBlanco);
  });

  $("#6").on("click",()=>{
    carrito.push(conjuntoJersey);
  });

  $("#7").on("click",()=>{
    carrito.push(pantalonBlanco);
  });
  


$("#carritobtn").on("click",()=>{
  $("#carritoM").modal("show")
  let totalPrecio =0;

  for(let i= 0; i<carrito.length; i++){
    $("#total").append(`<ul>
    <li>${carrito[i].tipo} -- ${carrito[i].precio}</li>
                       </ul`)
            totalPrecio += carrito[i].precio           
  }
  
  $("#total").append(`<p>total: ${totalPrecio}€</p>`)
})

})


// let camisetarosa ={tipo:"camiseta roja",precio:50}

// let carrito = []

// function add1(){
//   carrito.push(camisetarosa)
// }



// function showChart(){
//   let totalPrecio=0;

//   for(let i = 0; i< carrito.length; i++){
//     totalPrecio += carrito[i].precio
//   }

//   console.log(totalPrecio)
// }
