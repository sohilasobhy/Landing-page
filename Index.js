
AOS.init();
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    const filter = document.getElementById('body');
    menu.classList.add('show');
    filter.classList.add('show');
});
document.getElementById('closeMenu').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    const filter = document.getElementById('body');
    menu.classList.remove('show');
    filter.classList.remove('show');
});

function switchtoEN() {
    window.location.href = "Index.html";
}
function switchtoAr() {
    window.location.href = "IndexAr.html";
}



