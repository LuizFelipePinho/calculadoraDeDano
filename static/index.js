itens = document.querySelectorAll(".item") // pega todos os elementos com a classe item

vidaPersonagens = [] // crio uma lista vazia

for (const item of itens){ // percorre por cada indice, no caso elementos html com a classe item
    item.addEventListener("click", function(){ // adiciona um evento junto a uma função a cada elemento html
        
        var nome = this.getAttribute("data-nome"); // pega o valor nome
        var vida = this.getAttribute("data-vida") // pega o valor da vida
        
        if (vidaPersonagens.length == 0){  // se não tiver nenhum elemento adiciona e colore o fundo
            
            if (nome == "humano" || nome == "slime" || nome == "lizardmen"){
                vidaPersonagens.push(nome)
                vidaPersonagens.push(vida) /// joga pra lista o valor da vida
                item.style.background = "red"; // muda o fundo pra vermelho 
                console.log(vida) // mostra no console so pra teste
                console.log(vidaPersonagens) // mostra no console pra teste
            }
        }else {
            for (i = 0; i < vidaPersonagens.length; i++){
                if (vidaPersonagens[0] == nome){
                    console.log(nome + " está dentro da lista")
                }
            
            }

        } 
            
        
        

    })
}


botao = document.getElementById("calcular")

botao.addEventListener("click", function(){ 
    alert('botao funcional')
    
})