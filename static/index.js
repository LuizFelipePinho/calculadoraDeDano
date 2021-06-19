itens = document.querySelectorAll(".item") // pega todos os elementos com a classe item


personagemSelecionado = [] // crio uma lista vazia

for (const item of itens){ // percorre por cada indice, no caso elementos html com a classe item
    item.addEventListener("click", function(){ // adiciona um evento junto a uma função a cada elemento html
        
        var nome = this.getAttribute("data-nome"); // pega o valor nome
        var vida = this.getAttribute("data-vida") // pega o valor da vida
        
    if (personagemSelecionado.length == 0){  // se nenhum personagem for selecionado, adicione e colore o fundo
        
        if (nome == "humano" || nome == "slime" || nome == "lizardmen"){
            personagemSelecionado.push(nome)  // joga pra lista o valor de nome
            personagemSelecionado.push(vida) /// joga pra lista o valor da vida
            item.style.background = "red"; // muda o fundo pra vermelho 
        }
    }else { // caso tenha algum elemento vc vai verificar se o personagem selecionado já foi selecioado
        
        for (i = 0; i < personagemSelecionado.length; i++){ // vai percorrer a lista
            
            if (personagemSelecionado[0] == nome){ // caso o personagem já esteja selecionado e foi clicado novamente, ent desmarca
                removidos =  personagemSelecionado.splice(0,2) // remove  2 elementos a partir do 0 
                item.style.background = "rgb(245, 158, 172)";
            }   
            
        }
        
    } 
            
        
        

    })
}


botao = document.getElementById("calcular")

botao.addEventListener("click", function(){ 
    alert('botao funcional')
    
})