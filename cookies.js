document.addEventListener('DOMContentLoaded', function () {
    const cookies = document.getElementById('cookies');
    const fondo = document.getElementById('cookies-fondo'); // pribatutasuna.html orrian ez dago
    const onartu = document.getElementById('onartu');

    function ezkutatu() {
        if (cookies) cookies.style.display = 'none';
        if (fondo) fondo.style.display = 'none';
    }

    if (localStorage.getItem('cookiesOnartuta') === 'bai') {
        ezkutatu();
    }

    if (onartu) {
        onartu.addEventListener('click', function (e) {
            e.preventDefault();
            ezkutatu();
            localStorage.setItem('cookiesOnartuta', 'bai');
        });
    }
});
