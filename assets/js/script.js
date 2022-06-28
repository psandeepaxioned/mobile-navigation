/* Author: 

*/
const contents = document.querySelectorAll('.content')
const listitems = document.querySelectorAll('nav ul li a')

listitems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideallcontents()
        hideallitems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideallcontents(){
    contents.forEach(content => content.classList.remove('show'))
}

function hideallitems(){
    listitems.forEach(item => item.classList.remove('active'))
}





















