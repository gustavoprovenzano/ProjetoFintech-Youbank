const formularioCliente = document.getElementById("formularioCliente");

if (formularioCliente) {
    formularioCliente.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const rg = document.getElementById("rg").value;
        const endereco = document.getElementById("endereco").value;
        const bairro = document.getElementById("bairro").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;

        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

        const clienteExistente = clientes.find(c => c.cpf === cpf);
        if (clienteExistente) {
            alert("Cliente já existe.");
            return;
        }

        clientes.push({ nome, cpf, rg, endereco, bairro, email, telefone });
        localStorage.setItem("clientes", JSON.stringify(clientes));
        alert("Cadastro de cliente realizado com sucesso!");
        window.location.href = "home.html";
    });
}


const janelaFormulario = document.getElementById('janela-formulario');
const btnAbrir = document.getElementById('btnAbrir');
const btnVoltar = document.getElementById('btnVoltar');

if (btnAbrir && janelaFormulario) {
    btnAbrir.addEventListener('click', () => {
        janelaFormulario.classList.remove('escondido');
    });
}

if (btnVoltar) {
    btnVoltar.addEventListener('click', function () {
        window.location.href = 'clientes.html';
    });
}


if(btnConsultarClientes) {
    btnConsultarClientes.addEventListener('click', function () {
        window.location.href = 'clientes.html';
    });
}
