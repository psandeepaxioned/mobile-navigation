/* Author: 

*/
const contents = document.querySelectorAll('.slider')
const listitems = document.querySelectorAll('nav ul li')

listitems.forEach((item,idx) => {
    item.addEventListener('click', () => {
        hideallcontents()
        hideallitems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideallcontents(){
    contents.forEach(slider => slider.classList.remove('show'))
}

function hideallitems(){
    listitems.forEach(item => item.classList.remove('active'))
}





















