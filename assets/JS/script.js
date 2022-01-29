function rotate() {
    limparRotate();
    document.querySelector('.osso-img').classList.add('rotate');
}
function rotateDesativado() {
    limparRotate();
    document.querySelector('.osso-img').classList.add('rotate-desativado');
}

function limparRotate() {
    document.querySelector('.osso-img').classList.remove('rotate');
    document.querySelector('.osso-img').classList.remove('rotate-desativado');
}