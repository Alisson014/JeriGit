var view = false

function SaberMais(b){
    indice = b
    view = !view

    if (view){
        document.querySelectorAll(".PopUp")[indice].classList.add("Aparecer");
        document.querySelector(".CaixaPopUp").classList.add("AparecerCaixa");
    }
    else{
        document.querySelectorAll(".PopUp").forEach(card => {
            card.classList.remove("Aparecer");
        });
        document.querySelector(".CaixaPopUp").classList.remove("AparecerCaixa");
    }
}

function MudarPag(){
    alert("Login realizado com sucesso!  Click para entrar");
    window.location.replace("index.html");
}