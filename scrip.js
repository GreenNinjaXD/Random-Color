let table = document.querySelector('.table');

let amountBoxes = 621;


for (let i = 0; i < amountBoxes; i++) {
    let box = document.createElement('div')
    box.classList.add('box');

    table.append(box)

    box.addEventListener('mouseenter', () => setColor(box))
    box.addEventListener('mouseleave', () => removeColor(box))

}

function setColor(item) {
    var r = Math.floor(Math.random() * 256),

        g = Math.floor(Math.random() * 256),

        b = Math.floor(Math.random() * 256);

    item.style = `background: ${"rgb(" + r + "," + g + "," + b + ")"};`
}

function removeColor(item) {
    item.style = `background: '';`
}