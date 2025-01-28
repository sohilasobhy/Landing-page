
AOS.init();
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.add('show');
    menu.classList.add('animate__fadeInLeft');
});
document.getElementById('closeMenu').addEventListener('click', function () {
    const menu = document.getElementById('navbarSupportedContent');
    menu.classList.remove('show');
    menu.classList.remove('animate__fadeInLeft');

});


