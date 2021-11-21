let item = document.querySelectorAll('.offer-list-item')
let button = document.querySelector('.btn-continue')

/* Active item */

item.forEach(toggle => {

    toggle.addEventListener('click', () => {
        hideItems()
        handlerClickButton(toggle)

        toggle.classList.toggle('offer-active')
    })
})

function hideItems() {
    item.forEach(item => item.classList.remove('offer-active'))
}

/* Open link */

function handlerClickButton(link) {
    button.addEventListener('click', () => {
        if(link.classList.contains('first')) return window.open('https://www.google.com/search?q=1')
        if(link.classList.contains('second')) return window.open('https://www.google.com/search?q=2')
        if(link.classList.contains('third')) return window.open('https://www.google.com/search?q=3')
    })
}
