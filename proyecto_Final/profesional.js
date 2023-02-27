class Professional {

  constructor (name, age, weight, height, nationality,
     oscarsNumber, profession,photo ){

     this.name= name
     this.age = age
     this.weight = weight
     this.height = height
     this.nationality = nationality
     this.oscarsNumber = oscarsNumber
     this.profession = profession
     this.photo = photo
  }
}




let actor1 = new Professional("Brad Pitt", 59, 78, 180, "Estadounidense", 2, "actor","./bradpitt.jpg");

let actor2 = new Professional("Leonardo Di Caprio", 48, 85, 183, "Estadounidense", 1, "actor","./LeonardoDiCaprio.webp");

let actriz3 = new Professional("Meryl Streep", 73, 63, 167,"Estadounidense", 3, "actriz", "./merylestrep.jpg");

let actors = [actor1,actor2,actriz3];

 function mostrarProfesional(){

  let total = "";

  for(let i = 0; i< actors.length;i++){

    total += `<div class="card" style="width: 25rem; background-color: rgb(224, 187, 91); opacity: 80%">
    <img src= ${actors[i].photo} class="card-img-center m-lg-3" ; alt="...">
    <div class="card-body">
      <h5 class="card-title">${actors[i].name}</h5>
      <p class="card-text">Edad ${actors[i].age} años</p>
      <p class="card-text">Es ${actors[i].nationality}</p>
      <p class ="card-text">Tiene ${actors[i].oscarsNumber} oscars</p>
    </div>
    
   </div>`

  }

  $(`#actores`).append(total)
}