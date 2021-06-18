itens = document.querySelectorAll(".item")

vidaPersonagens = []

for (const item of itens){
    item.addEventListener("click", function(){
        
        var nome = this.getAttribute("data-nome"); // pega o valor nome
        var vida = this.getAttribute("data-vida") // pega o valor da vida
        if (vidaPersonagens.length == 0){  // se n for
            if (nome == "humano" || nome == "slime" || nome == "lizardmen"){
                vidaPersonagens.push(vida) /// joga pra lista o valor da vida
                item.style.background = "red";
                console.log(vida)
                console.log(vidaPersonagens)
            }
        }
        

    })
}


botao = document.getElementById("calcular")

botao.addEventListener("click", function(){
    
})