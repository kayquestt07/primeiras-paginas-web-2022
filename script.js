function filtrarReceitas(categoriaEscolhida){
    
    var listaCategorias = document.getElementsByClassName('categoria-receita')

    for(i=0; i<listaCategorias.length; i++){

        var categoriaAtual = document.getElementsByClassName('categoria-receita')[i]
        var listaReceitas = document.getElementsByClassName('receitas')
        
        var isCategoriaEscolhida = categoriaAtual.textContent.toUpperCase() == categoriaEscolhida.toUpperCase()
        var isCategoriaTodas = categoriaEscolhida.toUpperCase() == "TODOS"
        
        if(isCategoriaEscolhida || isCategoriaTodas){
            listaReceitas[i].style.display = ''

        }else{
            listaReceitas[i].style.display = 'none'
        }
    }
}

//Função Favoritar
const coracao = document.querySelectorAll('.coracao');

for (let i = 0; i < coracao.length; i++) {

    coracao[i].addEventListener("click", trocarImagem);

    function trocarImagem(event) {
        event.target.src = "coracao_fav.png";
        
    }

}