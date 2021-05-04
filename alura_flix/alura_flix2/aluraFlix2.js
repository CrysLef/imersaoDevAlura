function adicionarFilme(){
    var campoFilmeFav = document.querySelector('#filme');
    var filmeFav = campoFilmeFav.value;
    if(filmeFav.endsWith('.jpg')){
     listarFilmesNaTela(filmeFav); 
    }else {
      alert("Endereço de imagem inválida");
    }
    campoFilmeFav.value = "";
  }
  
  function listarFilmesNaTela(filme){
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" +
   filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }