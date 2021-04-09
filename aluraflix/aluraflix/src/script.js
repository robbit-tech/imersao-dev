//var filme1 = "Star Wars"
//var filme2 = "Toy Story"
//var filme3 = "Interstellar"

var listafilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX214_CR0,0,214,317_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0 ; i < listafilmes.length; i++ ){
  document.write("<img src= " + listafilmes[i] + " >")
}

var filmes = ["Star Wars","Toy Story","Interstellar"]  

//filmes.push ("Star Wars") 
//filmes.push ("Toy Story") 
//filmes.push ("Interstellar") 
//console.log(filmes)

for (var i = 0 ; i < filmes.length; i++ ){
   console.log(filmes[i]);
  
}