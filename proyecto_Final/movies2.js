

class Movie{

  constructor(title,releaseYear,genre,nacionality,photo){
  
       this.title= title;
       this.releaseYear = releaseYear;
       this.nacionality = nacionality
       this.genre= genre
       this.photo =photo
    }
 
  }  
  
  
  let pelicula1 = new Movie("Thelma & Louis",1991,"Comedia","USA","./telma.jpg")
  
  let pelicula2  = new Movie("Titanic",1997,"Romance","Usa","./Titanic.jpg")
  
  let pelicula3  = new Movie("Mamma Mia",2008,"Comedia romance","Reino Unido","./mammamia_.jpg")
  
  let arrMovies =[pelicula1,pelicula2,pelicula3];

function showMovies(){
  let movies = "";

  for(let i = 0; i<arrMovies.length; i++){
    movies += `<div class="card" style="width: 25rem; background-color: rgb(224, 187, 91);  opacity: 85%">
    <img src= ${arrMovies[i].photo} class="card-img-center m-lg-3"  ; alt="...">
    <div class="card-body">
      <h5 class="card-title">${arrMovies[i].title}</h5>
      <p class="card-text">${arrMovies[i].releaseYear}</p>
      <p class="card-text">${arrMovies[i].genre}</p>
    </div>
    
   </div>`

  }
  $(`#movie`).append(movies)
 
}

function addMovies(){

  let photo =$("#imagen").val() 
  let title = $("#titulo").val()
  let releaseYear = $("#año").val()
  let genre = $("#genre").val()
  let nacionality = $("#nacionalidad").val()
  let nuevapeli = new Movie(title,releaseYear,genre,nacionality,photo)

  arrMovies.push(nuevapeli)

 


}



