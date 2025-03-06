let icone = document.querySelector('.fa-eye-slash');

icone.addEventListener('click', ()=> {
    let input = document.querySelector('#senha');
    if (input.type == 'password') {
        input.type = 'text';
        icone.classList.remove('fa-eye-slash');
        icone.classList.add('fa-eye');
    }
    else {
        input.type = 'password';
        icone.classList.remove('fa-eye');
        icone.classList.add('fa-eye-slash');
    }
})

//Função para validar se o email foi escrito corretamnte
email.addEventListener('keyup', () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regexEmail.test(email.value); // Verifica se o e-mail é válido
    
    if (isValid) {
        labelEmail.setAttribute('style', 'color: black');
        labelEmail.innerHTML = 'Email';
        email.setAttribute('style', 'border-color: black');
        validarEmail = true;
    } else {
        labelEmail.setAttribute('style', 'color: red');
        labelEmail.innerHTML = 'Email *Insira um Email Valido';
        email.setAttribute('style', 'border-color: red');
    }
});

function entrar() {

    //Entrado do email
    let email = document.querySelector("#email");
    let labelEmail = document.querySelector("#labelEmail");
    //Entrado da senha
    let senha = document.querySelector("#senha");
    let labelSenha = document.querySelector("#labelSenha");

    let mensagemErro = document.querySelector("#mensagemErro");

    let listaUsuario = [];

    let validarUsuario = {
        nome: "",
        email: "",
        senha: ""
    }

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));

    listaUsuario.forEach((item) => {

        if(email.value == item.emailCad && senha.value == item.senhaCad){
            validarUsuario = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }  
    });
    if (email.value == validarUsuario.email && senha.value == validarUsuario.senha) {
        window.location.href = '../menu/menu.html'
    } else {
        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelSenha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');
        mensagemErro.setAttribute('style', 'display: block');
        mensagemErro.innerHTML = 'Email ou Senha estão incorretos'
        labelEmail.focus();
    }

}
