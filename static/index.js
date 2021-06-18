itens = document.querySelectorAll(".item")


for (const item of itens){
    item.addEventListener("click", function(){
        item.style.background = "red"
    })
}

