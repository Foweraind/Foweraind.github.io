/*menu responsivo*/

const menu = document.querySelector('.more-menu')

const menulist = document.querySelector('.menu')



/*função do menu responsivo*/

menu.addEventListener('click', () => {
    menulist.classList.toggle('active')
})

function changedSize() {
    if (window.innerWidth >= 769) {
        menulist.classList.remove('active')
    }
}
