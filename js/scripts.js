/*!
* Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//fecha


const fecha= new Date().getDate();
const año = new Date().getFullYear();

/* function diasEnString (){
    let dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const day = new Date().getDay();
    return dias[day]
}; */
function diasEnStringIngles (){
    let dias =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = new Date().getDay();
    return dias[day]
};

function month(){
    let meses =["January","February"," March","April","May","June","July","August","September","October","November","December"];
    const mes = new Date().getMonth();
    
    return meses[mes]
};
/* function meses(){
    let meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const mes = new Date().getMonth();
    
    return meses[mes]
}; */

//DOM
const date = document.getElementById("date");
const day = document.getElementById("day");
const months = document.getElementById("month");
const year = document.querySelectorAll(".year");

date.innerText = fecha;
day.innerText = diasEnStringIngles();
months.innerText = month();
//year.innerText = año;

year.forEach(element => {
    element.innerText = año;
});


//function goHome para pestañas
function goHome() {
    // Redirigir al home (index.html)
    window.location.href = "../index.html#tituloPrincipal";
    
    // Cerrar la pestaña actual (circum-galactic.html)
    //window.close();
    
    // Retornar false para evitar el comportamiento predeterminado del enlace
    return false;
}

