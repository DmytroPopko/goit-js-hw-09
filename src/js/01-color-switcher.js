function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function autoChangeColor() {
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  let timerId = null;
  let randonColor = null;

  startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');

    timerId = setInterval(() => {
      randonColor = getRandomHexColor();
      document.body.style.backgroundColor = randonColor;
    }, 1000);
  });

  stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    document.body.style.backgroundColor = randonColor;

    stopBtn.setAttribute('disabled', true);
    startBtn.removeAttribute('disabled');
  });
}

autoChangeColor();
