document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})

document.querySelectorAll('.team-member-img').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.children[4].classList.toggle('change')
        btn.parentElement.children[5].classList.toggle('change')
    })
})

document.querySelectorAll('.story').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.children[4].classList.toggle('change')
        btn.parentElement.children[5].classList.toggle('change')
    })
})