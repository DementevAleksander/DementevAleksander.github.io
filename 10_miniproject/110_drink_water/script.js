const target = document.getElementById('target')
const cups = document.getElementById('cups')

function createGlasses(repeat) {
    cups.innerHTML = `<div class="cup cup-small">250 мл</div>`.repeat(repeat)
}

target.addEventListener('keyup', function(){
    if (target.value > 5) {
        target.value = ''
    } else {
        target.value = target.value.replace(/[^\d]/g, '')
    }

    // if (target.value == 1) {
    //     createGlasses(4)
    // } else if (target.value == 2) {
    //     createGlasses(8)
    // } else if (target.value == 3) {
    //     createGlasses(12)
    // } else if (target.value == 4) {
    //     createGlasses(16)
    // } else if (target.value == 5) {
    //     createGlasses(20)
    // } else {
    //     cups.innerHTML = `<div><span>Вы ввели некорректное число. Введите от 1 до 5. Это будут литры.</span></div>`
    // }

    if (target.value) {
        createGlasses(+target.value*4)
    } else {
        cups.innerHTML = `<div><span>Вы указали некорректное число. Введите от 1 до 5. Это будут литры.</span></div>`
    }

    const smallCups = document.querySelectorAll('.cup-small')
    const listers = document.getElementById('liters')
    const percentage = document.getElementById('percentage')
    const remained = document.getElementById('remained')

    updateBigCup()

    smallCups.forEach((cup, idx) => {
        cup.addEventListener('click', () => highlightCups(idx))
    })

    function highlightCups(idx) {
        if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
        if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
            idx--
        }

        smallCups.forEach((cup, idx2) => {
            if(idx2 <= idx) {
                cup.classList.add('full')
            } else {
                cup.classList.remove('full')
            }
        })

        updateBigCup()
    }

    function updateBigCup() {
        const fullCups = document.querySelectorAll('.cup-small.full').length //количество полных стаканов.
        const totalCups = smallCups.length //всего стаканов.

        if(fullCups === 0) {
            percentage.style.visibility = 'hidden'
            percentage.style.height = 0
        } else {
            percentage.style.visibility = 'visible'
            percentage.style.height = `${fullCups / totalCups * 330}px`
            percentage.innerText = `${Math.round(fullCups / totalCups * 100)}%`
        }

        if(fullCups === totalCups) {
            remained.style.visibility = 'hidden'
            remained.style.height = 0
        } else {
            remained.style.visibility = 'visible'
            listers.innerText = `${target.value - (250 * fullCups / 1000)}L`
        }
    }

})

