const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    // console.log("Высота экрана / 5 * 4 :", triggerBottom)
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // console.log("Если расстояние от блока до верхнего края экрана",boxTop, "< высоты экрана / 5 * 4", triggerBottom, ", то показываем новый блок")

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}