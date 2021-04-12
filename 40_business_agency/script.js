// Navbar
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  navbar.classList.toggle("change");
  menu.classList.toggle('change')
});

document.querySelectorAll('.nav-link').forEach(btn => {
  btn.addEventListener('click', () => {
    // btn.parentElement.parentElement.classList.toggle('change')
    navbar.classList.toggle("change");
    menu.classList.toggle('change')
  })
})
// End of Navbar

// Section 2 Video
const video = document.querySelector('.video')
const btn = document.querySelector('.buttons button i');
const bar = document.querySelector('.video-bar')

const playPause = () => {
  if(video.paused) {
    video.play()
    btn.className = 'far fa-pause-circle'
    video.style.opacity = '.7'
  } else {
    video.pause()
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  }
}

btn.addEventListener('click', () => {
  playPause()
})


video.addEventListener('timeupdate', () => {
  // console.log(video.currentTime, video.duration)
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%` 
  if(video.ended) {
    btn.className = 'far fa-play-circle'
    video.style.opacity = '.3'
  } 
})
// End of Section 2 Video

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow', //меняет стиль отображения слайдов 'cube', 'fade', 'coverflow'
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 70, // Поворот слайда в градусах
    stretch: 0, // Растянуть пространство между слайдами (в пикселях)
    depth: 100, // Смещение глубины в пикселях (слайды переводятся по оси Z)
    modifier: 1, // Эффект мультиплеера
    slideShadows : true, // Включает тени слайдов
  }
});
