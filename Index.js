
AOS.init();
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.add('show');
});
document.getElementById('closeMenu').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.remove('show');
});

function switchtoEN() {
    window.location.href = "Index.html";
}
function switchtoAr() {
    window.location.href = "IndexAr.html";
}



