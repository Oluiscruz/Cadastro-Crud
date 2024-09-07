const usuarios = [];

function validarCPF(cpf) {
    return cpf.length === 11 & !isNaN(cpf);
}

function cadastrarUsuario() {

    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');

    const nome = document.querySelector('#nome').value;
    const data = document.querySelector('#data').value;
    const cpf = document.querySelector('#cpf').value;

    const cep = document.querySelector('#cep').value;
    const rua = document.querySelector('#rua').value;
    const numeroRua = document.querySelector('#numeroRua').value;
    const complemento = document.querySelector('#complemento').value || "";
    const referencia = document.querySelector('#referencia').value;

    const celular = document.querySelector('#celular').value;
    const email = document.querySelector('#email').value;

    let valido = true;

    if (!nome) {
        document.querySelector('#errorNome').textContent = "Preencha seu nome!";
        valido = false;
    }
    if (!data) {
        document.querySelector('#errorData').textContent = "Data De Nascimento é obrigatória.";
        valido = false;
    }
    if (!cpf || !validarCPF(cpf)) {
        document.querySelector('#errorCPF').textContent = "CPF é obrigatório";
        valido = false;
    }
    if (!cep) {
        document.querySelector('#errorCEP').textContent = "CEP é obrigatório";
        valido = false;
    }
    if (!rua) {
        document.querySelector('#errorRua').textContent = "Preencha este campo.";
        valido = false;
    }
    if (!numeroRua) {
        document.querySelector('#errorNumero').textContent = "Preencha este campo.";
        valido = false;
    }
    if (!referencia) {
        document.querySelector('#errorReferencia').textContent = "Referência da rua é obrigatório";
        valido = false;
    }

    if (!celular || isNaN(celular)) {
        document.querySelector('#errorCelular').textContent = "Informe o número do seu celular";
        valido = false;
    }
    if (!email || !email.includes('@')) {
        document.querySelector('#errorEmail').textContent = "Informe seu email.";
        valido = false;
    }
    if (!valido) {
        return;
    }

    const usuario = {
        nome,
        data,
        cpf,
        endereco: {
            cep,
            ruaCompleta: `${rua}, ${numeroRua}, ${complemento}`.trim(),
            referencia
        },
        contato: {
            celular,
            email
        }
    };

    usuarios.push(usuario);
    exibirUsuarios();
};

function exibirUsuarios() {
    const lista = document.querySelector('#listaUsuarios');
    lista.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');
        li.textContent = `${ index + 1 }. ${ usuario.nome } - ${ usuario.cpf } - Endereço: ${ usuario.endereco.ruaCompleta } - Contato: ${ usuario.contato.celular } <br>`;
        lista.appendChild(li);
    })
};