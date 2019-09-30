((c, d) => {
    var btnAbreMenu = document.querySelector('.iconoMenu');
    var btnCierraMenu = document.querySelector('.iconoMenuCerrar');
    var menu = document.querySelector('.menu');
    var link1 = document.querySelector('.link1');
    var link2 = document.querySelector('.link2');
    var link3 = document.querySelector('.link3');
    var link4 = document.querySelector('.link4');
    var link5 = document.querySelector('.link5');
    var link6 = document.querySelector('.link6');
    var link7 = document.querySelector('.link7');
    var link8 = document.querySelector('.link8');
    
    btnAbreMenu.addEventListener('click', abreMenu);
    btnCierraMenu.addEventListener('click', cierraMenu);
    link1.addEventListener('click', cierraMenu);
    link2.addEventListener('click', cierraMenu);
    link3.addEventListener('click', cierraMenu);
    link4.addEventListener('click', cierraMenu);
    link5.addEventListener('click', cierraMenu);
    link6.addEventListener('click', cierraMenu);
    link7.addEventListener('click', cierraMenu);
    link8.addEventListener('click', cierraMenu);
    function abreMenu(){
        menu.classList.add("mostrarMenu");
    }
    
    function cierraMenu(){
        menu.classList.remove("mostrarMenu");
    }


})(console.log, document);