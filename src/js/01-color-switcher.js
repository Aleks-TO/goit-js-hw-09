function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// отримаємо посилання на кнопки
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;
console.log(stopBtn);

// ставимо слухача подій на кнопки
startBtn.addEventListener('click', handleChangeBg);

function handleChangeBg() {
  // поставимо таймер
  startBtn.disabled = true;
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    bodyEl.style.backgroundColor = randomColor;
  }, 1000);
  return timerId;
}

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
});
