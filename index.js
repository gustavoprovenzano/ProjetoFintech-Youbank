document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();

    const cpfInput = document.getElementById('usuarioCPF').value.trim();
    const senhaInput = document.getElementById('senha').value.trim();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(user => user.usuarioCPF === cpfInput && user.senha === senhaInput);

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        window.location.href = 'home.html';
    } else {
        alert('CPF ou senha incorretos!');
    }
});


document.getElementById('btnCriarConta').addEventListener('click', function () {
    window.location.href = 'cadastro.html';
});