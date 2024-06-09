const button_avancar = document.getElementById("button-avancar");
const button_voltar = document.getElementById("button-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

function esconder (){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrar (){
    cartoes[cartaoAtual].classList.add("selecionado");
}

button_avancar.addEventListener("click", function (){
    if (cartaoAtual === cartoes.length - 1) return;
    esconder();
    cartaoAtual++;
    mostrar();
})

button_voltar.addEventListener("click", function (){
    if (cartaoAtual === 0) return;
    esconder();
    cartaoAtual--;
    mostrar();
})