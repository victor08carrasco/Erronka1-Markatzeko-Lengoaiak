document.addEventListener('DOMContentLoaded', function () {
    const cookies = document.getElementById('cookies');
    const fondo = document.getElementById('cookies-fondo');
    const onartu = document.getElementById('onartu');

    
    if (localStorage.getItem('cookiesOnartuta') === 'bai') {
        cookies.style.display = 'none';
        fondo.style.display = 'none';
    }

    
    onartu.addEventListener('click', function (e) {
        e.preventDefault();
        cookies.style.display = 'none';
        fondo.style.display = 'none';
        localStorage.setItem('cookiesOnartuta', 'bai');
    });
});
