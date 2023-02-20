

let datos = [];

function informacion(){

  let nombreInfo = document.getElementById("nombre1").value;
  let origenInfo = document.getElementById("origen").value;
  let destinoInfo = document.getElementById("destino").value;
  let personasInfo = document.getElementById("numero de personas").value;
  let fechaInfo = document.getElementById("date").value;

  let personas = {
    nombre: nombreInfo,
    origen : origenInfo,
    destino : destinoInfo,
    personas : personasInfo,
    fecha: fechaInfo
  };

  datos.push(personas)
  console.log(datos)

}

function filtrarDatos(){
  for(let i = 0 ; i<datos.length;i++){
    if(datos[i].destino.toUpperCase() == "CANARIAS" || datos[i].destino.toUpperCase() == "MALLORCA" || datos[i].destino.toUpperCase() == "GALICIA" ){
      console.log(datos[i])
    }
  }
}


