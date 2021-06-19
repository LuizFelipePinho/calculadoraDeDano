personagens = document.querySelectorAll(".personagem") // pega todos os elementos com a classe personagem
armas = document.querySelectorAll(".arma")

personagemSelecionado = [] // crio uma lista vazia
armaSelecionada = []


for (const personagem of personagens){ // percorre por cada indice, no caso elementos html com a classe personagem
    personagem.addEventListener("click", function(){ // adiciona um evento junto a uma função a cada elemento html
        
        var nome = this.getAttribute("data-nome"); // pega o valor nome
        var vida = this.getAttribute("data-vida") // pega o valor da vida
        
    if (personagemSelecionado.length == 0){  // se nenhum personagem for selecionado, adicione e colore o fundo
        
        if (nome == "humano" || nome == "slime" || nome == "lizardmen"){
            personagemSelecionado.push(nome)  // joga pra lista o valor de nome
            personagemSelecionado.push(vida) /// joga pra lista o valor da vida
            personagem.style.background = "red"; // muda o fundo pra vermelho 
        }
    }else { // caso tenha algum elemento vc vai verificar se o personagem selecionado já foi selecioado
        
        for (i = 0; i < personagemSelecionado.length; i++){ // vai percorrer a lista
            
            if (personagemSelecionado[0] == nome){ // caso o personagem já esteja selecionado e foi clicado novamente, ent desmarca
                removidos =  personagemSelecionado.splice(0,2) // remove  2 elementos a partir do 0 
                personagem.style.background = "rgb(245, 158, 172)";
            }   
            
        }
        
    } 
            
        
        
    })
}

// A PARTIR DAQUI REPETIMOS NOSSO  CÓDIGO ACIMA PRA PEGAR A ARMA PQ N CONSIGUI REUTILIZAR O CÓDIGO :/ KKK 

for (const arma of armas){ // percorre por cada indice, no caso elementos html com a classe personagem
    arma.addEventListener("click", function(){ // adiciona um evento junto a uma função a cada elemento html
        
        var nomeArma = this.getAttribute("data-nome"); // pega o valor nome
        var ataque = this.getAttribute("data-ataque") // pega o valor da vida
        console.log(nomeArma, ataque)
        
    if (armaSelecionada.length == 0){  // se nenhum personagem for selecionado, adicione e colore o fundo
        
        if (nomeArma == "tridente" || nomeArma == "katana" || nomeArma == "espada"){
            armaSelecionada.push(nomeArma)  // joga pra lista o valor de nome
            armaSelecionada.push(ataque) /// joga pra lista o valor da vida
            arma.style.background = "red"; // muda o fundo pra vermelho 
        }
    }else { // caso tenha algum elemento vc vai verificar se o personagem selecionado já foi selecioado
        
        for (i = 0; i < armaSelecionada.length; i++){ // vai percorrer a lista
            
            if (armaSelecionada[0] == nomeArma){ // caso o personagem já esteja selecionado e foi clicado novamente, ent desmarca
                removidos =  armaSelecionada.splice(0,2) // remove  2 elementos a partir do 0 
                arma.style.background = "rgb(245, 158, 172)";
            }   
            
        }
        
    } 
            
        
        
    })
}


botao = document.getElementById("calcular")
dano = document.getElementById("dano")

botao.addEventListener("click", function(){
    if(personagemSelecionado.length > 0 && armaSelecionada.length > 0){
        
        if (parseInt(armaSelecionada[1]) >= parseInt(personagemSelecionado[1])){
            dano.innerHTML = `Se você atacar com ${armaSelecionada[0]} que tem ${armaSelecionada[1]} de ataque, ganha de ${personagemSelecionado[0]} 
            com ${personagemSelecionado[1]} de vida  `
            personagem
    
        } else {
            dano.innerHTML = ` ${armaSelecionada[0]} não é suficiente pra matar o ${personagemSelecionado[0]}`
        }

    } else {
        dano.innerHTML = `Selecione o personagem e arma corretamente!`
    }
    
       
    
})