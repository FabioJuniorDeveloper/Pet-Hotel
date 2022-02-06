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

const bottomScroll = document.querySelector('.whatsApp-link')
function decidirBotaoScroll() {
    if (window.scrollY == 0) {
        bottomScroll.style.display = 'none';
    } else {
        bottomScroll.style.display = 'flex';
    }
}

window.addEventListener('scroll', decidirBotaoScroll)



