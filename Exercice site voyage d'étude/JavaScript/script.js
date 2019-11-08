one.addEventListener('click', un)

function un() {
    image2.hidden = true
    image1.hidden = false
    image3.hidden = true
}

Two.addEventListener('click', deux)

function deux() {
    image3.hidden = true
    image2.hidden = false
    image1.hidden = true
}

three.addEventListener('click', trois)

function trois() {
    image1.hidden = true
    image2.hidden = true
    image3.hidden = false
}

