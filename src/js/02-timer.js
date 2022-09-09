import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function simpleTimer() {
  const refs = {
    myInput: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    options: {
      enableTime: true,
      time_24hr: true,
      defaultDate: new Date(),
      minuteIncrement: 1,
      onClose(selectedDates) {
        checkDate(selectedDates[0]);
      },
    },
  };

  refs.startBtn.setAttribute('disabled', true);

  flatpickr(refs.myInput, refs.options);

  class Timer {
    constructor({ onTick }) {
      this.intervalId = null;
      this.isActive = false;
      this.onTick = onTick;

      this.init();
    }

    init() {
      const time = this.convertMs(0);
      this.onTick(time);
    }

    start() {
      refs.startBtn.setAttribute('disabled', true);

      if (this.isActive) {
        return;
      }

      this.isActive = true;

      let startTime = new Date(refs.myInput.value).getTime();

      this.intervalId = setInterval(() => {
        const deltaTime = startTime - Date.now();
        const time = this.convertMs(deltaTime);

        if (deltaTime < 1000) {
          clearInterval(this.intervalId);
        }

        this.onTick(time);
      }, 1000);
    }

    convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

      return { days, hours, minutes, seconds };
    }

    /*
     * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
     */
    pad(value) {
      return String(value).padStart(2, '0');
    }
  }

  const timer = new Timer({
    onTick: updateClockface,
  });

  refs.startBtn.addEventListener('click', timer.start.bind(timer));

  function updateClockface(time) {
    for (const key in time) {
      document.querySelector(`[data-${key}]`).textContent = time[key];
    }
  }

  function checkDate(selectedDate) {
    if (selectedDate < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.removeAttribute('disabled');
    }
  }
}

simpleTimer();
