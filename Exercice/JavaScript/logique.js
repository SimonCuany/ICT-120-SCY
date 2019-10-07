div1.addEventListener('click', makeblue)

function makeblue() {
    div1.classList.add("makeblue")
}

div2.addEventListener('click', remove)

function remove() {
    div1.classList.remove('makeblue')
}

div3.addEventListener('mouseover', arial)
div3.addEventListener('mouseout', Times)

function arial() {
div3.style.fontFamily= "Arial"

}

function Times() {
    div3.style.fontFamily="Times new roman"
}






