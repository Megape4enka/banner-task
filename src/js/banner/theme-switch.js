let checkbox = document.querySelector('.checkbox')
let body = document.querySelector('body')

checkbox.onclick = function () {
    body.classList.toggle('dark')
}
