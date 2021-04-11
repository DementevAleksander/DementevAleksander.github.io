const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');
const clickCountingButton = document.getElementById('countingButton');
const displayErrorMessage = document.getElementById('errorMessage');
const displayWrapperCountdown = document.getElementById('wrapper_countdown');

const currentYear = new Date().getFullYear();
let newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

clickCountingButton.addEventListener('click', () => {
  const selectDate = document.getElementById('wrapper_date_date').value;
  const selectMonth = document.getElementById('wrapper_date_month').value;
  const selectYear = document.getElementById('wrapper_date_year').value;

  const newDate = new Date()
  newYearTime = new Date(`${selectDate} ${selectMonth} ${selectYear} 00:00:00`);

  if (newYearTime < newDate) {
    displayErrorMessage.style.display = 'block';
    displayWrapperCountdown.style.display = 'none';
  } else {
    newYearTime = new Date(`${selectDate} ${selectMonth} ${selectYear} 00:00:00`);
    setInterval(updateCountdown, 1000);
    displayErrorMessage.style.display = 'none';
    displayWrapperCountdown.style.display = 'flex';
  }
}) 

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();

  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);