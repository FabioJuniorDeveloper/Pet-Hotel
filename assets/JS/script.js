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

window.onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        if (document.querySelector("nav ul").style.display == 'flex') {
            document.querySelector("nav ul").style.display = 'none'
        } else {
            document.querySelector("nav ul").style.display = 'flex'
        }
    });
};


