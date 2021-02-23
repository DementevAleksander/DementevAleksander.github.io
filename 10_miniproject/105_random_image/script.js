const randomImgEl = document.getElementById('randomImg')
const randomImgBtn = document.getElementById('randomImgBtn')
const randomAutor = document.getElementById('autor')

randomImgBtn.addEventListener('click', generaterandomImg)

generaterandomImg()

// USING ASYNC/AWAIT
async function generaterandomImg() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  getRndInteger(0, 29)
  function getRndInteger(min, max) {
    return randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(randomNumber)

  const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100', config)
  const data = await res.json()

  randomImgEl.innerHTML = `<img src="${data[randomNumber].download_url}" width="500" alt="Тут должна быть случайная картинка"/>`
  randomAutor.innerHTML = `Автор: ${data[randomNumber].author}`
}

// USING .then()
// function generaterandomImg() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadrandomImg.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       randomImgEl.innerHTML = data.randomImg
//     })
// }