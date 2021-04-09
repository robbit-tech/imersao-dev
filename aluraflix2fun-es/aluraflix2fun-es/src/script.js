function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')){
    listaFilmesNaTela (filmeFavorito)
  }else{
    alert("Imagem invalida!")
    
  }
  
  campoFilmeFavorito.value = ""
}

function listaFilmesNaTela(filme){
  var listaFilmes =document.querySelector('#listaFilmes')
  var elementoFilme = "<img src= " + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  
}