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
    div3.style.fontFamily = "Arial"

}

function Times() {
    div3.style.fontFamily = "Times new roman"
}

div4.addEventListener('click', yes)

function yes() {
    if (box1.checked == true && box2.checked == true) {
        div4.innerHTML = "YES"
        div4.classList.add("yes")
    }
}

div5.addEventListener('click', boom)

function boom() {
    kaboom.hidden = "true"

}

textname.addEventListener('keyup', initial)

function initial() {
    first = textname.value.substr(0, 1)
    espace = textname.value.lastIndexOf(" ")
    second = textname.value.substr(espace + 1, 1)
    last = textname.value.length
    third = textname.value.substr(last - 1, 1)
    ini.value = first + second + third
}


