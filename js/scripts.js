/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
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

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    // const content = "Please enjoy watching this portfolio";
    // const text = document.querySelector(".text");
    // let i = 0;
    
    // function typing(){
    //     let txt = content[i++];
    //     text.innerHTML += txt;
    //     if (i > content.length) {
    //         text.textContent = "";
    //         i = 0;
    //     }
    // }
    setInterval(typing, 200)
    const content = "Please enjoy watching this portfolio.";
    const text = document.querySelector(".text");
    let i = 0;
    
    function typing(){
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200)






});
