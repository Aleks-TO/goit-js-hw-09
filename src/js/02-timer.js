import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let selectedDate = null;
let timerId = null;
// отримаємо посилання на всі елементи які  нас цікавлять

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('.value[data-days]'),
  hoursEl: document.querySelector('.value[data-hours]'),
  minutesEl: document.querySelector('.value[data-minutes]'),
  secondsEl: document.querySelector('.value[data-seconds]'),
};
refs.startBtn.disabled = true;
// настройки Notiflix
const optionsNotiflix = {
  timeout: 2000,
  clickToClose: true,
  position: 'center-top',
};
// настройки flatpickr
const optionsflatpickr = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    if (selectedDate < Date.now()) {
      Notify.failure('Виберіть дату більшу від сьогоднішньої', optionsNotiflix);
      refs.startBtn.disabled = true;
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.inputEl, optionsflatpickr); // виклик ф-ї для створення вибору дат

//refs.startBtn.disabled = true; // робимо за замовчуванням кнопку неактивною
// ставимо слухача на кнопку
refs.startBtn.addEventListener('click', handleStartTimer);

function handleStartTimer() {
  timerId = setInterval(() => {
    const currentDate = Date.now();
    const deltaTime = selectedDate - currentDate;
    const time = convertMs(deltaTime);
    refs.daysEl.textContent = time.days;
    refs.hoursEl.textContent = time.hours;
    refs.minutesEl.textContent = time.minutes;
    refs.secondsEl.textContent = time.seconds;
    if (selectedDate <= currentDate) {
      return;
    }
  }, 1000);
}

// функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
