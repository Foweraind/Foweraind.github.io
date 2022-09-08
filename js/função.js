/*menu haburguer*/

const menu = document.querySelector('.more-menu')

const menulist = document.querySelector('.menu')



/*função do menu hamburguer*/

menu.addEventListener('click', () => {
    if (menulist.style.display == 'flex') {
        menulist.style.display = 'none'
    } else {
        menulist.style.display = 'flex'
    }
})

function changedSize() {
    if (window.innerWidth >= 769) {
        menulist.style.display = 'flex'
    } else {
        menulist.style.display = 'none'
    }
}