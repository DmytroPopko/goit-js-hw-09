import Notiflix from 'notiflix';

function createPromises() {
  const form = document.querySelector('.form');

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    });
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const {
      elements: { delay, step, amount },
    } = event.target;

    let delayTime = parseInt(delay.value, 10);
    const stepInt = parseInt(step.value, 10);

    for (let index = 1; index <= amount.value; index++) {
      createPromise(index, delayTime)
        .then(result => Notiflix.Notify.success(result))
        .catch(error => Notiflix.Notify.failure(error));
      delayTime += stepInt;
    }
  });
}

createPromises();
