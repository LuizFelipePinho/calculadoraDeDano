from logging import debug
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():

    personagens = [
        {
            'nome' : 'humano',
            'vida' : 10,
        },
        {
            'nome' : 'slime',
            'vida' : 4,
        },
        {
            'nome' : 'lizardmen',
            'vida' : 14,
        } ]

    armas = [
        {
            'nome' : 'tridente', 
            'ataque': 2,
        },
         {
            'nome' : 'katana',
            'ataque': 4,
        },
         {
            'nome' : 'espada',
            'ataque': 5,
        }
    ]
    caminhoImagem = "/static/img/"
    




    return render_template(
        "index.html",
        personagens = personagens,
        armas = armas,
        caminhoImagem = caminhoImagem
        )

if __name__ == "__main__":
    app.run(debug=True)
