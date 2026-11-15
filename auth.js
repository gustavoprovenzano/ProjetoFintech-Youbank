window.addEventListener('load', function () {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (usuarioLogado) {
        const elementoBemVindo = document.getElementById('bemVindo');

        if (elementoBemVindo) {
            elementoBemVindo.textContent = `Bem-vindo, ${usuarioLogado.nome || usuarioLogado.usuarioCPF}`;
        }
    } else {
        window.location.href = 'index.html';
    }
});