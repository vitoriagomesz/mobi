//ERRO FORMULÁRIO PÁGINA - CADASTRO D
const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

//FUNÇÃO ERRO
function setError(cadastroD) {
    campos[cadastroD].style.border = "2px solid #B10101";
    spans[cadastroD].style.display = "block";
}
//FUNÇÃO VALIDADO
function removeError(cadastroD) {
    campos[cadastroD].style.border = "";
    spans[cadastroD].style.display = "none";
}
//FUNÇÃO VALIDADOR DE NOME
function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    }
    else {
        removeError(0);
    }
}
//FUNÇÃO VALIDADOR DE EMAIL
function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}
//FUNÇÃO VALIDADOR CNH
function cnhValidate() {
    if (campos[2].value.length < 10) {
        setError(2);
    }
    else {
        removeError(2);
    }
}
//FUNÇÃO VALIDADOR NÚMERO CRACHÁ
function crachaValidate() {
    if (campos[3].value.length < 8) {
        setError(3);
    }
    else {
        removeError(3);
    }
}
//FUNÇÃO VALIDADOR SENHA
function senhaValidate() {
    if (campos[4].value.length < 8) {
        setError(4);
    }
    else {
        removeError(4);
        comparePassword();
    }
}
//FUNÇÃO VALIDADOR CONFIRMAÇÃO DE SENHA
function comparePassword() {
    if (campos[4].value == campos[5].value && campos[5].value.length >= 8) {
        removeError(5);
    }
    else {
        setError(5);
    }
}

// DROPDOWN PERGUNTAS - POLÍTICA DA PRIVACIDADE
const botaoExibir = document.getElementById("mb-btn-mostrar");
const elementoEscondido = document.getElementById("mb-elemento-escondido");
const setaDireita = document.querySelector(".mb-seta-lock");

botaoExibir.addEventListener("click", function () {
    if (elementoEscondido.style.display == "none" && setaDireita.classList.contains("mb-seta-open")) {
        elementoEscondido.style.display = "block";
        setaDireita.classList.remove("mb-seta-open");
        setaDireita.classList.add("mb-seta-lock");

    } else {
        elementoEscondido.style.display = "none";
        setaDireita.classList.remove("mb-seta-lock");
        setaDireita.classList.add("mb-seta-open");
    }
});

//DIV LIGAR/DESLIGAR BLUETOOTH
function swapDivs() {
    const div1 = document.querySelector(".mb-bluetooth-block");
    const div2 = document.querySelector(".mb-bluetooth-none");
    
    if (div1.style.display === "none") {
      div1.style.display = "block";
      div2.style.display = "none";
    } else {
      div1.style.display = "none";
      div2.style.display = "block";
    }
  }