document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("cadastroNome").value;
    const usuarioCPF = document.getElementById("cadastroUsuarioCPF").value;
    const senha = document.getElementById("cadastroSenha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExistente = usuarios.find(u => u.usuarioCPF === usuarioCPF);
    if (usuarioExistente) {
        alert("Usuário já existe.");
        return;
    }


    usuarios.push({ nome, usuarioCPF, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";


});

const btnVoltar = document.getElementById('btnVoltar');
if (btnVoltar) {
    btnVoltar.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
}