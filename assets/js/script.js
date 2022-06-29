/* Author: 

*/
const contents = document.querySelectorAll('.slider li')
const listitems = document.querySelectorAll('nav ul li a')

console.log(contents, listitems);

listitems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideallcontents()
        hideallitems()
        
        item.classList.add('active')
        contents[idx].classList.add('active')
    })
})

function hideallcontents(){
    contents.forEach(slider => slider.classList.remove('active'))
}

function hideallitems(){
    listitems.forEach(item => item.classList.remove('active'))
}





















