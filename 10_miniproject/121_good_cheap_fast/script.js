const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')
const message = document.querySelector('#message')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theClickedOne) {
            fast.checked = false
            message.innerHTML = '<p class="green">Качественно и дёшево, но очень долго!</p> <img src="smiley.jpg" width="100" alt=";)"/>'
        }

        if(cheap === theClickedOne) {
            good.checked = false
            message.innerHTML = '<p class="green">Дёшево и быстро, но за качество не отвечаю!</p> <img src="smiley.jpg" width="100" alt=";)"/>'
        }

        if(fast === theClickedOne) {
            cheap.checked = false
            message.innerHTML = '<p class="green">Качественно и быстро, но дорого!</p> <img src="smiley.jpg" width="100" alt=";)"/>'
        }
    } else {
        message.innerHTML = '<p class="red">Выберите варианты!</p>'
    }
}