// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValueEl = document.querySelector('#value');
const incrementButtonEl = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementButtonEl = document.querySelector(
  '#counter button[data-action="decrement"]',
);

function onDecrementBtnClick() {
  counterValueEl.textContent--;
}

function onIncrementBtnClick() {
  counterValueEl.textContent++;
}

incrementButtonEl.addEventListener('click', onIncrementBtnClick);
decrementButtonEl.addEventListener('click', onDecrementBtnClick);
