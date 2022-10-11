if (isMobile.any()) {
    document.body.classList.add('_touch');
    toggleMenu();
} else {
    document.body.classList.add('_pc');
};
// Прокрутка к чему-то на сайте
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);

    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);

            // Если шапка поверх других блоков (- document.querySelector('header').offsetHeight;)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.perventDefault();
        }
    }
}
